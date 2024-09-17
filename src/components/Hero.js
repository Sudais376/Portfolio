import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-maxOverallWidth mx-auto">
        <div className="relative">
          <img
            className="w-full h-heroHeight object-cover opacity-heroOpacity brightness-50"
            src="/Hero2.jpg"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-heroHeight flex justify-center py-20 md:py-40">
            <div>
            <h1 className="text-white font-bold text-3xl md:text-5xl text-center px-4 pb-4">Crafting Dynamic Web Experiences</h1>
            <p className="text-center text-lg md:font-semibold text-heroParaTextColor max-w-heroParaMaxWidth px-4 py-4">I’m Muhammad Sudais, a passionate frontend web developer with a keen eye for design and a love for creating seamless, user-friendly websites. Explore my projects and see how I turn ideas into interactive digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
