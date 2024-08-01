import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt="Blog"
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white line-clamp-1">{title}</h1>
        <p className="text-gray-500 dark:text-gray-300 mt-2 line-clamp-4 text-sm">{description}</p>
        <div className="flex justify-end mt-4">
          <FaArrowRight className="text-gray-500 dark:text-gray-300 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;



