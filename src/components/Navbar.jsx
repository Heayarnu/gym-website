import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row px-5 gap-10 sm:gap-28 mt-5 sm:mt-8 justify-start sm:space-x-28">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-12 h-12 mx-5" />
      </Link>

      <div className="flex flex-row gap-10 text-2xl items-end">
        <Link
          to="/"
          className="no-underline text-custom-red1 border-b-2 border-custom-red2"
        >
          Home
        </Link>

        <a href="#exercises" className="no-underline text-custom-red1">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
