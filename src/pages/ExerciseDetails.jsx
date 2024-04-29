import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);

useEffect(() => {
  const FetchExercisesData = async () => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailData = await fetchData(
      `${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions
    );
    setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(
      `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
      youtubeOptions
    );
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExerciseData = await fetchData(
      `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
      exerciseOptions
    );
    setTargetMuscleExercise(targetMuscleExerciseData);

    const equipmentExerciseData = await fetchData(
      `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
      exerciseOptions
    );
    setEquipmentExercise(equipmentExerciseData);
  };

  FetchExercisesData();
}, [id]);

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
    </div>
  );
};

export default ExerciseDetails;
