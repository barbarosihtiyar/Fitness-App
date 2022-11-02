import React , {useEffect,useState} from 'react';
import Pagination fron '@mui/material/Pagination';
import {Box, Stack , Typography} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData';

function Exercises({exercises , setExercises , bodyPart}) {
  return (
    <Box id="exercises"
      sx={{mt:{lg:"110px"}}}
      mt="50px"
      p="20px"
      >

    </Box>
  )
}

export default Exercises