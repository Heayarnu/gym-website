import React from "react";

import BodypartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, equipment, target } = exerciseDetail;

  const extraDetail = [
    {
      name: bodyPart,
      icon: BodypartImage,
    },
    {
      name: equipment,
      icon: EquipmentImage,
    },
    {
      name: target,
      icon: TargetImage,
    },
  ];

  return (
    <div className="gap-14 flex flex-col lg:flex-row p-5 items-center">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="w-[729px] h-[742px]"
      />
      <div className="gap-5 lg:gap-9">
        <h1 className="text-3xl mb-2 font-bold capitalize">{name}</h1>

        <h2 className="text-lg">
          Stay strong with exercise! <br />
          <span className="capitalize underline">{name}</span> is an excellent
          choice for enhancing your{" "}
          <span className="font-semibold capitalize">{target}</span>.<br />
          Experience improved mood and increased energy with regular practice.
        </h2>

        {extraDetail.map((item) => (
          <div key={item.name} className="flex gap-6 items-center flex-row">
            <button className="bg-[#fff2db] border rounded-full w-24 h-24 flex justify-center items-center mt-3">
              <img src={item.icon} alt={bodyPart} className="w-12 h-12" />
            </button>

            <h2 className="font-medium text-lg capitalize">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
