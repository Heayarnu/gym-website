/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Herobanner from "../components/Herobanner";
import SearchExercises from "../components/SearchExercises";
import Exercices from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <Herobanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercices
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  );
};

export default Home;
