import React from "react";
import yellowCar from "../../assets/blog/school.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="dark:bg-gray-950 dark:text-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 lg:pr-12 xl:pr-24 mb-12 lg:mb-0 space-y-6">
          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            ProShule
            <br />
            <span className="text-primary">The Future of School Management</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          >
            Exhibit IT Solutions Limited's experienced team of industry professionals has developed a school management system aimed at addressing key challenges faced by both school management and parents.
          </p>
          <Link
            to="/features"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="0"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div
          data-aos="zoom-in"
          className="flex-1 relative max-w-md mx-auto lg:max-w-lg lg:mx-0"
        >
          <img
            src={yellowCar}
            alt="School Management System"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '600px' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

