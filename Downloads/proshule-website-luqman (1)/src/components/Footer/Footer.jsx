import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/logopro.png"; // Assuming you have a logo for the footer

const FooterLinks = [
  { title: "About", link: "/about" },
  { title: "Features", link: "/features" },
  { title: "Works", link: "/works" },
  { title: "Career", link: "/career" },
];

const HelpLinks = [
  { title: "Customer Support", link: "/support" },
  { title: "Delivery Details", link: "/delivery-details" },
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Privacy Policy", link: "/policy" },
];

const ResourcesLinks = [
  // Add resources links if needed
  // { title: "Free Ebooks", link: "/ebooks" },
  // { title: "How To Blog", link: "/blogs" },
  // { title: "Subscribe TCJ", link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-md">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          {/* Logo and Social Media Container */}
          <div className="flex flex-col md:w-1/4 mb-8 md:mb-0">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="Logo" className="w-32" />
            </a>
            <div className="flex gap-6">
              <a href="#" className="text-2xl text-gray-600 hover:text-primary transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-600 hover:text-primary transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-600 hover:text-primary transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col md:flex-row md:w-3/4 gap-8 md:gap-12">
            <div className="flex flex-col md:w-1/4 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Company</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <Link to={link.link} className="text-gray-600 hover:text-primary transition-colors duration-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:w-1/4 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Help</h2>
              <ul className="space-y-2">
                {HelpLinks.map((link) => (
                  <li key={link.title}>
                    <Link to={link.link} className="text-gray-600 hover:text-primary transition-colors duration-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:w-1/4 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Resources</h2>
              <ul className="space-y-2">
                {ResourcesLinks.map((link) => (
                  <li key={link.title}>
                    <a href={link.link} className="text-gray-600 hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12">
          <p>&copy; {new Date().getFullYear()} ProShule. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



