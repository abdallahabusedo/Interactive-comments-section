"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const CommentTypo = ({ content }) => {
  return (
    <Box>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default CommentTypo;
