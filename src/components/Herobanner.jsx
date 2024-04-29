import React from "react";
import HerobannerImage from "../assets/images/banner.png";

const Herobanner = () => {
  return (
    <div className="relative p-5 mt-16 lg:mt-52 sm:ml-12">
      <p className="text-custom-red2 font-semibold text-2xl">Fitness Club</p>

      <p className="font-bold text-4xl lg:text-5xl mb-6 mt-7">
        {" "}
        Sweat, Smile <br /> and Repeat
      </p>

      <p className="text-lg leading-8 mb-8">
        Check out the most effective exercise
      </p>

      <button
        href="#exercises"
        className="border rounded-md bg-custom-red2 text-xl px-3 py-2 font-semibold text-white hover:bg-red-600 font-mono"
      >
        EXPLORE EXERCISES
      </button>

      <p className="font-semibold text-9xl text-200 text-custom-red2 opacity-10 hidden md:block mt-10">
        Exercise
      </p>

      <img
        src={HerobannerImage}
        alt="banner"
        className="hidden absolute right-0 top-0 w-auto h-900 md:-mt-280"
      />
    </div>
  );
};

export default Herobanner;
