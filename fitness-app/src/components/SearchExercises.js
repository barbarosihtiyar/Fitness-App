import React from 'react';
import {useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'

function SearchExercises() {
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
      value="" 
      onChange={(e) => {}}
      placeHolder="Search Exercises"
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
        <Button>
        Search
        </Button>
      </Box>
    </Stack>

    )
}

export default SearchExercises