"use client";
import { commentCard } from "@/styles/commentsStyle";
import { Box, Divider } from "@mui/material";
import React from "react";
import Voting from "./Voting";
import CommentTypo from "./CommentTypo";
import CommentHeader from "./CommentHeader";
import ReplyCard from "./ReplyCard";
const CommentCard = ({ comment }) => {
  return (
    <Box>
      <Box sx={commentCard}>
        <Voting score={comment.score} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CommentHeader user={comment.user} createdAt={comment.createdAt} />
          <CommentTypo content={comment.content} />
        </Box>
      </Box>
      <ReplyCard replies={comment.replies} />
    </Box>
  );
};

export default CommentCard;
