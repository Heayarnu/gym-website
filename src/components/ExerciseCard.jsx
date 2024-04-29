import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="w-64 h-72 lg:w-[300px] lg:h-[350px] bg-white border-t-4 border-custom-red2 no-underline flex justify-between flex-col items-center pb-2 my-4 scale-100 transition-all duration-300"
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div>
        <button className="ml-5 text-white bg-[#ffa9a9] text-sm border rounded-2xl px-2 py-1 capitalize">
          {exercise.bodyPart}
        </button>

        <button className="ml-5 text-white bg-[#fcc757] text-sm border rounded-2xl px-2 py-1 capitalize">
          {exercise.target}
        </button>
        <h2 className="text-black ml-5 font-bold capitalize pb-2 mt-3 text-xl">
          {exercise.name}
        </h2>
      </div>
    </Link>
  );
};

export default ExerciseCard;
