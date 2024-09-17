import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around gap-6 py-12 px-4 max-w-maxOverallWidth mx-auto bg-navBg">
        <div className="max-w-footerItemMaxWidth flex flex-col md:flex-row justify-center items-center gap-4">
          <img
            className="rounded-full"
            src="/Footer.jpg"
            width={100}
            height={100}
            alt=""
          />
          <div className="font-bold text-xl pl-8 md:pl-0 text-paragraphsTextColor">
            Muhammad Sudais
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center max-w-footerItemMaxWidth">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61564082033501&sk=videos"
              target="_blank"
            >
              <img
                src="/Facebook.svg"
                width={25}
                alt="See Projects on Facebook"
              />
            </a>
            <span className="text-lg font-semibold text-paragraphsTextColor">
              <a
                href="https://www.facebook.com/profile.php?id=61564082033501&sk=videos"
                target="_blank"
              >
                Projects' Demos
              </a>
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="https://github.com/Sudais376" target="_blank">
              <img src="/Github.svg" width={25} alt="See Projects on Github" />
            </a>
            <span className="text-lg font-semibold pr-6 text-paragraphsTextColor">
              <a href="https://github.com/Sudais376" target="_blank">
                Source Code
              </a>
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/+923335101246" target="_blank">
              <img src="/WhatsApp.svg" width={25} alt="Contact On WhatsApp" />
            </a>
            <span className="text-lg font-semibold text-paragraphsTextColor">
              <a href="https://wa.me/+923335101246" target="_blank">
                Send a Message
              </a>
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pr-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sudais376376@gmail.com"
              target="_blank"
            >
              <img src="/Gmail.svg" width={25} alt="Contact through e-mail" />
            </a>
            <span className="text-lg font-semibold text-paragraphsTextColor">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sudais376376@gmail.com"
                target="_blank"
              >
                Send an e-mail
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-3 py-6 pl-6 max-w-maxOverallWidth mx-auto bg-navBg text-paragraphsTextColor">
        <p>&copy; Copyright | All rights Reserved. </p>
        <p className="flex gap-2">
          <span>Created</span> <span>With</span>
          <img src="/Heart.svg" width={25} alt="" />
          <span>By</span> <span>Muhammad</span> <span>Sudais</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
