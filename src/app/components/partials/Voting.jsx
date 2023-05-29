"use client";
import { voteCard, voteNumber } from "@/styles/commentsStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Voting = ({ score }) => {
  const [scoreState, setScoreState] = React.useState(score);
  const increment = () => setScoreState(score + 1);
  const decrement = () => setScoreState(score - 1);
  return (
    <Box sx={voteCard}>
      <Image
        src={"/images/icon-plus.svg"}
        width={15}
        height={15}
        alt="plus"
        className="opacity-50 hover:opacity-100 hover:cursor-pointer"
        onClick={increment}
      />
      <Typography sx={voteNumber}>{scoreState}</Typography>
      <Image
        src={"/images/icon-minus.svg"}
        width={15}
        height={15}
        alt="minus"
        className="opacity-50 hover:opacity-100 hover:cursor-pointer"
        onClick={decrement}
      />
    </Box>
  );
};

export default Voting;
