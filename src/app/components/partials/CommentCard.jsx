"use client";
import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import Voting from "./Voting";
import CommentTypo from "./CommentTypo";
import CommentHeader from "./CommentHeader";
const CommentCard = () => {
  return (
    <Box sx={commentCard}>
      <Voting />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <CommentHeader />
        <CommentTypo />
      </Box>
    </Box>
  );
};

export default CommentCard;
