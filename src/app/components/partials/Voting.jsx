"use client";
import { voteCard, voteNumber } from "@/styles/commentsStyle";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Voting = ({ score }) => {
  const [scoreState, setScoreState] = React.useState(score);
  const increment = () =>
    setScoreState((prev) => {
      if (scoreState >= score + 1) {
        return prev;
      }
      return prev + 1;
    });
  const decrement = () =>
    setScoreState((prev) => {
      if (scoreState <= score - 1) {
        return prev;
      }
      return prev - 1;
    });
  return (
    <Box sx={voteCard}>
      <Button
        onClick={increment}
        sx={{ minWidth: "35px !important", height: "20px", overflow: "hidden" }}
      >
        <Image
          src={"/images/icon-plus.svg"}
          width={15}
          height={15}
          alt="plus"
          className="opacity-50 hover:opacity-100 "
        />
      </Button>
      <Typography sx={voteNumber}>{scoreState}</Typography>
      <Button
        onClick={decrement}
        sx={{ minWidth: "35px !important", height: "20px" }}
      >
        <Image
          src={"/images/icon-minus.svg"}
          width={15}
          height={15}
          alt="minus"
          className="opacity-50 hover:opacity-100 "
        />
      </Button>
    </Box>
  );
};

export default Voting;
