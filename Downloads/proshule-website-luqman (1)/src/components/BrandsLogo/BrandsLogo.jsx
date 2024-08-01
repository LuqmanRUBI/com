import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  { title: "Improved Data Management", description: "ProShule manages and organizes student data in a centralized database, including personal and academic information, attendance, grades, and test scores. Schools can easily access and update student records, offering a clear view of student performance and progress." },
  { title: "Enhanced Communication And Collaboration", description: "ProShule facilitates communication and collaboration among teachers, students, and parents through notice boards, email, messaging, and forums. This ensures effective communication and collaboration among all parties." },
  { title: "Streamlined Administrative Processes", description: "The system streamlines administrative tasks like enrollment, scheduling, and grading, automating many processes to save time and reduce errors." },
  { title: "Improved Financial Management", description: "Features such as billing, invoicing, and payment processing help schools track and manage income and expenses, offering clear financial insights for better decision-making and resource allocation." },
  { title: "Greater Parent Involvement", description: "ProShule enhances parent involvement with features like parent portals that provide access to student grades, schedules, and other key information, fostering a collaborative learning environment." },
  { title: "Increased Productivity", description: "By automating administrative tasks and improving communication, ProShule boosts productivity, allowing teachers and administrators to focus on critical tasks and improving overall school effectiveness." },
  { title: "Enhanced Security", description: "ProShule enhances security with user authentication, data encryption, and backup options to protect sensitive student data and ensure privacy and confidentiality." },
  { title: "Customization And Flexibility", description: "ProShule offers customization and flexibility, allowing schools to tailor the system to their specific needs, including custom roles and permissions for staff." },
  { title: "Improved Student Outcomes", description: "The system improves student outcomes by providing a personalized learning experience, tracking performance, and identifying areas for improvement to support student success." },
  { title: "Cost-Effectiveness", description: "ProShule is a cost-effective solution that reduces manual tasks and labor costs, helping schools streamline operations and improve efficiency." },
  { title: "Competitive Advantage", description: "Gain a competitive edge with a comprehensive and efficient school management system." },
];

const BrandsLogo = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Benefits of ProShule
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {benefit.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        {/* Optional Image Section */}
        {/* <div className="py-6 flex items-center justify-center">
          <img src={comp} alt="Comparison" className="w-full md:w-1/2 lg:w-1/3" />
        </div> */}
      </div>
    </section>
  );
};

export default BrandsLogo;



