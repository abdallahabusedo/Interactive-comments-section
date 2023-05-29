"use client";
import {
  addCommentCard,
  addCommentContainer,
  commentCard,
  sendButton,
} from "@/styles/commentsStyle";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const AddComment = ({ userData }) => {
  return (
    <Box sx={addCommentCard}>
      <Box sx={addCommentContainer}>
        <Image
          src={"/images/avatars/image-ramsesmiron.webp"}
          width={40}
          height={40}
          alt="pic"
          loading="lazy"
        />
        <TextField placeholder="Add a comment" sx={{ flex: "1" }} />
        <Button sx={sendButton}>SEND</Button>
      </Box>
    </Box>
  );
};

export default AddComment;
