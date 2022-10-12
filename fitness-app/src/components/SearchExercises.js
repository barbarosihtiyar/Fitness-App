import React from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import {useState,useEffect} from 'react';
import {exerciseOptions , fetchData} from '../utils/fetchData';

function SearchExercises() {
  const [search,setSearch] = useState("");
  const [exercises,setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    
    setBodyParts(["all",...bodyPartsData])
    }

  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)

        || exercise.target.name.toLowerCase().includes(search)
        || exercise.equipment.name.toLowerCase().includes(search)
        || exercise.bodyPart.name.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack justifyContent="center" alignItems="center"  mt="37px" padding="20px">
      <Typography fontWeight="700" mb="50px" textAlign="center"
      sx={{
        fontSize : {lg : "44px" , xs : "30px"}
      }}
      >
      Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position="relative" mb="72px" height="76px" >
       <TextField 
      value={search} 
      onChange={(e) => setSearch(e.target.value.toLowerCase)}
      placeholder="Search Exercises"
      type="text"
      sx = {{
        input : {fontWeight : "700" , 
        border: "none" ,
        borderRadius:"4px"
      },
      width : {lg : "800px" , xs  : "350px"},
      backgroundColor : "#fff",
      borderRadius : "40px"
      }}
      />
        <Button className="search-btn"
        sx={{
          backgroundColor:"#FF2625",
          color:"#fff",
          textTransform:"none",
          width:{lg : "175px" , xs : "80px"},
          fontSize:{lg : "20px" , xs : "14px"},
          height : "56px",
          position : "absolute",
          right : "0"
        }}
        onClick={handleSearch}
        >
        Search
        </Button>
      </Box>
      <Box sx={{ position:"relative" , width:"100%", p:"20px"}}>
        <HorizontalScrollBar data={bodyParts} />
        
      </Box>
    </Stack>

    )
}

export default SearchExercises