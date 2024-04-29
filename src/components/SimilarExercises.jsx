import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <div className="lg:mt-24">
      <h2 className="text-lg font-semibold mb-2">
        Exercises that targets the same muscle group
      </h2>
      <div className="flex flex-row p-1 relative">
        {targetMuscleExercise.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </div>

      <h2 className="text-lg font-semibold mb-2">
        Exercises that uses the same equipment
      </h2>
      <div className="flex flex-row p-1 relative">
        {equipmentExercise.length ? (
          <HorizontalScrollBar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
