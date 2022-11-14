import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScroolMenu, visibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScroollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScroolMenu LeftArrow={LeftArrow} RigtArrow={RightArrow}>
      <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </ScroolMenu>
  );
};

export default HorizontalScroollBar;
