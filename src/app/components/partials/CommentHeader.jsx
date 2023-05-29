"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ReplayButton from "./ReplayButton";
import { commentHeader } from "@/styles/commentsStyle";

const MessageHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box sx={commentHeader}>
        <Image
          src={"/images/avatars/image-amyrobson.png"}
          width={30}
          height={30}
          alt="pic"
        />
        <Typography>amyrobson</Typography>
        <Typography>1 month ago</Typography>
      </Box>
      <ReplayButton />
    </Box>
  );
};

export default MessageHeader;
