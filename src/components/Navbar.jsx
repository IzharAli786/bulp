import React from "react";
import { Link } from "react-router-dom";
import NavbarToggle from "./NavbarToggle";

const Navbar = () => {
  const { isOpen, toggleMenu } = NavbarToggle();
  const menuList = (
    <>
      <Link
        to="/"
        className="block px-4 py-2 hover:bg-[#aa4e9f] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      >
        Home
      </Link>
      <Link
        to="/team"
        className="block px-4 py-2 hover:bg-[#aa4e9f] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      >
        Our Team
      </Link>
      <Link
        to="/services"
        className="block px-4 py-2 hover:bg-[#aa4e9f] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      >
        What We Offer
      </Link>
      <Link
        to="/about"
        className="block px-4 py-2 hover:bg-[#aa4e9f] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="block px-4 py-2 hover:bg-[#aa4e9f] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <>
      <div className="fixed left-0 top-0 w-full h-20 flex items-center z-50 bg-gradient-to-r from-[#810CA0] to-[#8C147E]">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-2">
          {/* Logo or Brand */}
          <div className="flex items-center">
            <span className="text-lg text-white font-bold font-dancing">
              BULPE
            </span>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6 font-bold text-white font-merriweather">
            {menuList}
          </div>

          {/* Toggle button for smaller screens */}
          <div className="md:hidden flex items-center">
            <div className="md:hidden flex items-center">
              <button className="menu-btn" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="block md:hidden  text-white py-2 bg-gradient-to-r from-[#810CA0] to-[#8C147E] mt-16">
          {menuList}
        </div>
      )}
    </>
  );
};
export default Navbar;
