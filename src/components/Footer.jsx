import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full  justify-center">
        <div className="p-6 rounded-t-[50px] bg-[#082f49]">
            {/*Community Section */}
          <div className=" rounded-[50px] bg-orange-400 ">
            <div className="justify-center text-white font-mono  text-center">
              <div className="text-5xl  p-6">Join With Our Community</div>
              <div className="p-6">
                After a lifetime of being loved relentlessly by our dogs, we
                decided it was time to reciprocate this love back to our furry
                friends .
              </div>

              <div className="flex  pt-6 ">
                <div className="rounded-full bg-white hidden md:block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3128/3128208.png"
                    alt=""
                    className="w-[180px]  p-6 "
                  />
                </div>
                <div className="rounded-full bg-white hidden md:block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4926/4926496.png"
                    alt=""
                    className="w-[180px]  p-6 -rotate-45 "
                  />
                </div>
                <div className="rounded-full bg-white hidden md:block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                    alt=""
                    className="w-[180px]  p-6 "
                  />
                </div>
                <div className="rounded-full bg-white hidden md:block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png"
                    alt=""
                    className="w-[180px]  p-6 rotate-45"
                  />
                </div>
                <div className="rounded-full bg-white ml-[150px] hidden md:block">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                    alt=""
                    className="w-[180px]  p-6 rotate-45 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-6 border-b border-gray-400 w-full text-white">
          
            <div className="text-2xl font-bold p-6">FocoWalk</div>

            {/* Desktop Navbar */}
            <div className="hidden md:flex text-[18px] space-x-8 font-semibold">
              <a href="" className="">
                Home
              </a>
              <a href="" className=" flex items-center">
                About Us{" "}
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </a>
              <a href="" className="">
                Become a sitter
              </a>
              <a href="" className="">
                Search walkers
              </a>
              <a href="" className="">
                Login
              </a>
              <a href="" className="">
                Sign up
              </a>
            </div>

            {/* Mobile button  */}
            <div className="md:hidden">
              <button id="menu-toggle" className=" text-3xl focus:outline-none">
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
              className="hidden absolute top-16 left-0 w-full  flex flex-col items-start space-y-4 p-4 border-t border-gray-400 shadow-md md:hidden"
            >
              <a href="" className=" text-[18px]">
                Home
              </a>
              <a href="" className=" text-[18px] flex items-center">
                About Us{" "}
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </a>
              <a href="" className=" text-[18px]">
                Become a sitter
              </a>
              <a href="" className=" text-[18px]">
                Search walkers
              </a>
              <a href="" className=" text-[18px]">
                Login
              </a>
              <a href="" className=" text-[18px]">
                Sign up
              </a>
            </div>
          </div>
          <div className="text-center  text-white p-5">
            {" "}
            All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
