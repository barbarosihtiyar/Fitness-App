import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScroolMenu, visibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from './ExerciseCard';
import RightArrowIcon from './assets/right-arrow.png';
import LeftArrowIcon from './assets/left-arrow.png';

const HorizontalScroollBar = ({ data, bodyPart, setBodyPart , isBodyParts }) => {
  return (
    <ScroolMenu LeftArrow={LeftArrow} RigtArrow={RightArrow}>
    {data.map((item) => (
      <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id ||item}
      m="0 40px"
      >
      {isBodyParts &&       <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}
      {setBodyPart}   />}
  );
)};
</ScroolMenu>

export default HorizontalScroollBar;
