import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 border-b border-gray-400 w-full">
        {/* Logo  */}
        <div className="text-2xl font-bold text-orange-800">FocoWalk</div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex text-[18px] space-x-8 font-semibold">
          <a href="#home" className="text-gray-800">
            Home
          </a>
          <a href="#about" className="text-gray-800 flex items-center">
            About Us <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </a>
          <a href="#sitter" className="text-gray-800">
            Become a sitter
          </a>
          <a href="" className="text-gray-800">
            Search walkers
          </a>
            <Link
              to="/login">
          <a href="" className="text-gray-800">
            Login
          </a>
          </Link>
          <Link
              to="/register">
          <a href="" className="text-gray-800">
            Sign up
          </a>
          </Link>
        </div>

        {/* Mobile button  */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-gray-800 text-3xl focus:outline-none"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list-ul"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-list-ul fa-lg"
            >
              <path
                fill="currentColor"
                d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                className=""
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown  */}
        <div
          id="mobile-menu"
          className="hidden absolute top-16 left-0 w-full bg-white flex flex-col items-start space-y-4 p-4 border-t border-gray-400 shadow-md md:hidden"
        >
          <a href="#home" className="text-gray-800 text-[18px]">
            Home
          </a>
          <a href="#about" className="text-gray-800 text-[18px] flex items-center">
            About Us <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </a>
          <a href="#sitter" className="text-gray-800 text-[18px]">
            Become a sitter
          </a>
          <a href="" className="text-gray-800 text-[18px]">
            Search walkers
          </a>
          <a href="" className="text-gray-800 text-[18px]">
            Login
          </a>
          <a href="" className="text-gray-800 text-[18px]">
            Sign up
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
