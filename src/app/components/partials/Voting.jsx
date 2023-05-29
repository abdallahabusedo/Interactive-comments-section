"use client";
import { voteCard, voteNumber } from "@/styles/commentsStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Voting = () => {
  return (
    <Box sx={voteCard}>
      <Image
        src={"/images/icon-plus.svg"}
        width={15}
        height={15}
        alt="plus"
        className="hover:opacity-50 hover:cursor-pointer"
      />
      <Typography sx={voteNumber}>10</Typography>
      <Image
        src={"/images/icon-minus.svg"}
        width={15}
        height={15}
        alt="minus"
        className="hover:opacity-50 hover:cursor-pointer"
      />
    </Box>
  );
};

export default Voting;
