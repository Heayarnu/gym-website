/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      className={`flex flex-col items-center mx-3 justify-center  bg-white border-b
       rounded-bl-2xl min-w-20 sm:w-28 md:w-32 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44  cursor-pointer gap-11 ${
         bodyPart === item ? "border-t-4 border-[#ff2625]" : ""
       }`}
    >
      <img src={Icon} alt="dumbbell" className="w-10 h-10" />

      <p className="text-base capitalize fontbold text-custom-red2 -mt-5">
        {item}
      </p>
    </div>
  );
};

export default BodyParts;
