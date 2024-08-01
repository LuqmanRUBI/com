import React from "react";
import { SlNote } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";

const featuresData = [
  {
    name: "Parent Communication Module",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Real-Time Updates On Student Attendance, Fees, And Performance, Fee Transparency And Payment Reminders, Data: Parent-Student Relationships, Fee Record",
    aosDelay: "0",
  },
  {
    name: "Class Module",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "View Class Details, Delete A Class, Search For A Specific Class, Add A Student To A Class, Delete A Student From A Class, View Class Performance, Assign Subjects To A Class, Manage Class Attendance And Rollcall",
    aosDelay: "300",
  },
  {
    name: "Transportation Module",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Managing Of School Transport: Buses, Routes, Drivers And Students Using School Transportation, School Bus Tracking Through Google Maps Integration, Alert Sent To Parent Five Minutes Before Pick Up, Parent Notification During School Pick Up And Dropoff Through Biometric Identification",
    aosDelay: "500",
  },
  {
    name: "Security & Privacy Module",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "User Authentication And Authorization, Data Encryption And Secure Storage, Compliance With Data Privacy Regulations, Secure Communication Protocols, Data: User Credentials, Encrypted Student Data",
    aosDelay: "700",
  },
  {
    name: "Library Module",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Catalogue Books, Manage Issuances, Track Returns, Give Parent View Of Their Child's Reading",
    aosDelay: "1700",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 dark:bg-black dark:text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-3xl font-bold text-gray-900 dark:text-primary sm:text-4xl"
          >
            Features of ProShule
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2"
          >
            Explore the key features that make ProShule an exceptional platform.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <article
              key={feature.name}
              data-aos="fade-up"
              data-aos-delay={feature.aosDelay}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
