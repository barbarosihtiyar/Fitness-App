import React , {useEffect,useState} from 'react';
import Pagination fron '@mui/material/Pagination';
import {Box, Stack , Typography} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const[currentPage,setCurrentPage] = useState(1);
  const exercisesPage = 9;
}

function Exercises({exercises , setExercises , bodyPart}) {
  
  return (
    <Box id="exercises"
      sx={{mt:{lg:"110px"}}}
      mt="50px"
      p="20px"
      >
    <Typography varian="h3" mb="46px">
    Showing Results
    </Typography>
    <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}}
    flexWrap="wrap" justifyContent="center">
    {exercises.map((exercise,index) => (
      <ExerciseCard key={index} exercise={exercise} />
    ))}
    </Stack>
    <Stack mt="100px" alignItems="center">
      {exercises.length > 9 && (
        <Pagination  
           color="standard"
           shape="rounded"
           defaultPage={1}
           count={Math.ceil(exercise.length / 
           exercisesPage)}
           page={currentPage}
           onChange={paginate}
           size="large"
        />
      )}
    </Stack>
    </Box>
  )
}

export default Exercises