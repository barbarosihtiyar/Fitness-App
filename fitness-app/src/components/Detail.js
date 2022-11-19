import React from "react";
import { Typography, Stack, Button } from "@mui/icon/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/body-part.png";
import { useState, useEffect } from "react";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alingItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alingItems="center">
            <Button>
              <img src={item.icon} />
            </Button>
            <Typography variant="h6">
              Exercises keep you strong.{name} {``}
              is one of the best exercises to target your {target}.It will help
              you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
              <Stack
                key={item.name}
                direction="row"
                gap="24px"
                alingItems="center"
              >
                <Button>
                  <img src={item.icon} />
                </Button>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
