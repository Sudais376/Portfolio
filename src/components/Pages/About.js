import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-maxOverallWidth mx-auto bg-primaryBg">
        <div className="relative">
          <img
            className="h-aboutHeight xl:w-aboutUsImageWidth object-cover rounded-lg"
            src="/About3.png"
            width={1600}
            alt=""
          />
          <div className="absolute top-aboutTop left-aboutLeftNormal md:left-aboutLeftMedium lg:left-aboutLeftLarge">
            <h2 className=" text-headingAndButtonTextColor text-2xl md:text-4xl font-bold md:pl-12 py-4">
              Muhammad Sudais
            </h2>
            <p className="text-paragraphsTextColor text-center text-lg md:pl-12">
              Frontend Web Developer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-maxOverallWidth mx-auto rounded-md bg-primaryBg py-6">
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="max-w-aboutUsMaxWidth rounded-lg px-4 pr-1 py-4">
            <div>
              <h3 className="text-center text-2xl md:text-3xl font-bold text-headingAndButtonTextColor">
                About Us
              </h3>
            </div>
            <div>
              <p className="pt-6 pb-2 md:text-xl text-paragraphsTextColor">
                Welcome to <span className="font-bold">CodeCrafters</span>,
                where creativity meets technology. We are passionate about
                delivering innovative solutions and Interactive Web Designs.
              </p>
            </div>
            <div>
              <p className="py-2 md:text-xl text-paragraphsTextColor">
                Our mission is to create user-friendly, cutting-edge digital
                experiences that empower businesses to succeed in a competitive
                landscape.
              </p>
            </div>
            <div>
              <p className="py-2 md:text-xl text-paragraphsTextColor">Feel Interested in Contatcing?</p>
            </div>
            <div className="pr-4">
              <button className="px-6 py-2 bg-navButtonBg hover:bg-navButtonHoverBg border border-green-300 rounded-md font-bold w-full my-6 text-headingAndButtonTextColor">
                <a href="https://wa.me/+923335101246" target="_blank">
                  Contact here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
