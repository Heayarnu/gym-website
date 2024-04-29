import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const isBodyparts = '';

  useEffect(() => {
    const FetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    FetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        exerciseOptions
      );

      const SearchedExercises = exercisesData.filter((item) => {
        const filterCondition =
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search);

        return filterCondition;
      });

      console.log("Searched Exercises:", SearchedExercises); // Log the filtered exercises

      setSearch("");
      setExercises(SearchedExercises);
    }
  };

  return (
    <div className="items-center flex flex-col justify-center mt-9 md:p-5">
      <p className="font-bold text-3xl md:text-5xl text-center mb-10">
        Awesome Exercises You
        <br />
        Should Know
      </p>

      <div className="relative mb-16 w-full justify-center flex flex-row">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "300" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises"
          type="text"
        />

        <button
          onClick={handleSearch}
          className="bg-custom-red2 font-mono text-base h-14 mx-2 md:text-lg w-20 md:w-44 hover:bg-red-800 text-white border border-custom-red2"
        >
          Search
        </button>
      </div>

      <div className="relative w-full p-5">
        <HorizontalScrollBar
          bodyPart={bodyPart}
          data={bodyParts}
          setBodyPart={setBodyPart}
          isBodyparts={isBodyparts}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
