"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ReplayButton from "./ReplayButton";
import { commentHeader } from "@/styles/commentsStyle";

const MessageHeader = ({ user, createdAt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box sx={commentHeader}>
        <Image
          src={`${user && user.image.png}`}
          width={30}
          height={30}
          alt="pic"
        />
        <Typography>{user.username}</Typography>
        <Typography>{createdAt}</Typography>
      </Box>
      <ReplayButton />
    </Box>
  );
};

export default MessageHeader;
