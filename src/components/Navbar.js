import React, { useState } from "react";
import SmNavbar from "./SmNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [OriginalNav, SmNav] = useState(false);

  const showNavbar = () => {
    SmNav(!OriginalNav);
  };

  return (
    <>
      {OriginalNav ? (
        <SmNavbar />
      ) : (
        <nav className="sticky top-0 z-10 flex justify-between items-center px-6 lg:px-20 max-w-maxOverallWidth mx-auto py-6 bg-navBg">
          <div className="brand cursor-pointer">
            <Link to="/"><span className="text-xl md:text-3xl text-white font-bold">M. Sudais</span></Link>
            
          </div>
          <ul className="hidden md:flex justify-between items-center gap-4 lg:gap-6 px-2 lg:px-12">
            <li className="text-lg cursor-pointer hover:text-listItemsHoverText hover:underline text-white">
              <Link to ="/">Home</Link>
            </li>
            <li className="text-lg cursor-pointer hover:text-listItemsHoverText hover:underline text-white">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="text-lg cursor-pointer hover:text-listItemsHoverText hover:underline text-white">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-lg cursor-pointer hover:text-listItemsHoverText hover:underline text-white"><Link to="/projects">Projects</Link>
            </li>
            <button className="bg-navButtonBg text-white font-bold px-6 py-2 rounded-md hover:bg-navButtonHoverBg transition duration-300 ease-in-out transform hover:-translate-y-upward">
              <a
                href="https://www.facebook.com/profile.php?id=61564082033501&sk=videos"
                target="_blank"
              >
                Projects on Facebook
              </a>
            </button>
          </ul>
          <svg
            className="block md:hidden"
            onClick={showNavbar}
            width={60}
            height={60}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#ffffff"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </nav>
      )}
    </>
  );
};

export default Navbar;
