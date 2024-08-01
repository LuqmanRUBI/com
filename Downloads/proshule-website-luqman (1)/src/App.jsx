import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo";
import Features from "./components/features/Services";
import BlogsComp from "./components/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Navbar/contact";
// import Testimonial from "./components/Testimonial/Testimonial"; // Example path for Testimonial page

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <div className="pt-32"> 
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Uncomment and adjust these routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/features" element={<Features />} />
          {/* <Route path="/testimonials" element={<Testimonial />} /> */}
          <Route path="/blogs" element={<BlogsComp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <BrandsLogo />
        <BlogsComp />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
