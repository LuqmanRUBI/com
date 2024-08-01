import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logopro.png";

export const MenuLinks = [
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Features", link: "/features" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 3, name: "Blogs", link: "/blogs" },

];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="container py-4 md:py-3">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-28" />
          </Link>
          {/* Desktop view Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <Link
                    to={link}
                    className="text-lg font-medium text-gray-800 hover:text-primary py-2 transition-colors duration-300"
                    aria-label={name}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-transform transform rotate-90"
                size={30}
                aria-label="Close menu"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-transform"
                size={30}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;




