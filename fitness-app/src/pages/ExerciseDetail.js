import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercise";

function ExerciseDetail() {
  const [ExerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercise] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/serch?q=${exerciseDetailData.name},exerciseOptions`
      );
      setExerciseVideos(exerciseVideosData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/targer/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercise(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/targer/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setTargetMuscleExercise(equipmentExercisesData);
    };
    fetchExerciseData();
  }, [id]);
  return;
  <Box>
    <Detail ExerciseDetail={ExerciseDetail} />
    <ExerciseVideos
      exerciseVideos={exerciseVideos}
      name={ExerciseDetail.name}
    />
    <SimilarExercises />
  </Box>;
}

export default ExerciseDetail;
