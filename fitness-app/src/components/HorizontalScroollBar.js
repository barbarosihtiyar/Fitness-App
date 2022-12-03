import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScroolMenu, visibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from './ExerciseCard';
import RightArrowIcon from './assets/right-arrow.png';
import LeftArrowIcon from './assets/left-arrow.png';

const HorizontalScroollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScroolMenu LeftArrow={LeftArrow} RigtArrow={RightArrow}>
      <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </ScroolMenu>
  );
};

export default HorizontalScroollBar;
