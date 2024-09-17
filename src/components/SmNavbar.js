import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const SmNavbar = () => {
  const [OriginalSmNav, SecondNav] = useState(false);
  const handlecheck = () => {
    SecondNav(!OriginalSmNav);
  };

  return (
    <>
      {OriginalSmNav ? (
        <Navbar />
      ) : (
        <nav className="md:hidden sticky top-0 z-10 bg-navBg w-full px-3 py-3">
          <div className="flex justify-between items-center px-4">
            <div className="text-white font-bold text-2xl">
              M. Sudais
            </div>
            <div onClick={handlecheck}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                fill="#ffffff"
                viewBox="0 0 384 512"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </div>
          </div>
          <ul className="py-3 px-6">
            <li className="text-white text-lg cursor-pointer hover:text-listItemsHoverText hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white text-lg cursor-pointer hover:text-listItemsHoverText hover:underline">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="text-white text-lg cursor-pointer hover:text-listItemsHoverText hover:underline">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-white text-lg cursor-pointer hover:text-listItemsHoverText hover:underline">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <div>
            <button className="bg-navButtonBg text-white font-bold w-full px-6 py-2 rounded-md hover:bg-navButtonHoverBg">
              <a
                href="https://www.facebook.com/profile.php?id=61564082033501&sk=videos"
                target="_blank"
              >
                Projects on Facebook
              </a>
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default SmNavbar;
