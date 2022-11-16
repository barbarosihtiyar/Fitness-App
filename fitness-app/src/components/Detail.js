import React from "react";
import { Typography, Stack, Button } from "@mui/icon/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/body-part.png";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alingItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    </Stack>
  );
}

export default Detail;
