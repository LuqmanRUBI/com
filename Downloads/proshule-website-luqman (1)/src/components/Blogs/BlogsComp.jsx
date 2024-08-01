import React from "react";
import BlogCard from "./BlogCard";
import student from "../../assets/blog/studentpreview.png";
import library from "../../assets/blog/librarypreview.png";
import prooverview from "../../assets/blog/prooverview.png";
import school from "../../assets/blog/school.png";

const BlogsData = [
  {
    id: 1,
    image: student,
    title: "Real-time Analytics for Students",
    description:
      "Discover how real-time analytics can transform student engagement and performance. Learn how our solutions help students stay ahead of the curve.",
    author: "Jane Doe",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: library,
    title: "Modern Library Management Systems",
    description:
      "Explore the latest advancements in library management systems and how they streamline operations and improve user experience.",
    author: "John Smith",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: prooverview,
    title: "Comprehensive Project Overviews",
    description:
      "Gain insights into our comprehensive project overviews that provide detailed analysis and actionable insights for successful project execution.",
    author: "Alice Johnson",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          proshule review
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition">
            View All Posts
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
