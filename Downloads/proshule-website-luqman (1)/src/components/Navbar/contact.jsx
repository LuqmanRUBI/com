import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with actual API endpoint
      const response = await axios.post('https://pro-shule/contact', formData);

      if (response.status === 200) {
        setResponseMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setResponseMessage('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      setResponseMessage('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-[#194C8D] mb-12 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#194C8D] mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#194C8D] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {responseMessage && (
              <div className="mt-4 text-center text-gray-700">
                {responseMessage}
              </div>
            )}
          </div>
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#194C8D] mb-6 text-center">Contact Information</h3>
            <p className="text-lg text-gray-700 mb-4 text-center">We are available for further discussions and demos. We also conduct site visits to tailor our solutions to fit your needs and operations.</p>
            <div className="text-gray-700">
              <p className="mb-4 text-center">
                <strong>Malik Heights</strong><br />
                6th Floor, Suite 601<br />
                Ngong Road
              </p>
              <p className="mb-4 text-center">
                <strong>Phone:</strong><br />
                020 810 0101
              </p>
              <p className="text-center">
                General Inquiries: <a href="mailto:info@exhibitsolutions.co.ke" className="text-blue-500 hover:underline">info@exhibitsolutions.co.ke</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
