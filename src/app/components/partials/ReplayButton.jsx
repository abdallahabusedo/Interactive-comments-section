"use client";
import { replyButton } from "@/styles/commentsStyle";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ReplayButton = () => {
  return (
    <Button sx={replyButton}>
      <Image src={"/images/icon-reply.svg"} width={20} height={20} alt="pic" />
      <Typography>Replay</Typography>
    </Button>
  );
};

export default ReplayButton;
