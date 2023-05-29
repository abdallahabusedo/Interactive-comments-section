"use client";
import {
  addCommentCard,
  addCommentContainer,
  commentCard,
  sendButton,
} from "@/styles/commentsStyle";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { formatDateAgo } from "../utils/generals";

const AddComment = ({ userData }) => {
  const [newComment, setNewComment] = React.useState("");
  const handleSend = () => {
    let dataToSend = {
      content: newComment,
      createdAt: formatDateAgo(new Date()),
      score: 0,
      user: {
        username: userData.username,
        image: {
          png: userData.image.png,
          webp: userData.image.webp,
        },
      },
      replies: [],
    };
    axios
      .request({
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/comments",

        data: dataToSend,
      })
      .then((response) => {
        location.reload();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        <TextField
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          sx={{ flex: "1" }}
        />
        <Button onClick={handleSend} sx={sendButton}>
          SEND
        </Button>
      </Box>
    </Box>
  );
};

export default AddComment;
