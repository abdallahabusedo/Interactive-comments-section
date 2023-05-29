"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const CommentTypo = ({ content, repliedTo }) => {
  return (
    <Box>
      <Typography>
        {repliedTo && (
          <span className="font-bold text-moderateBlue">@{repliedTo} </span>
        )}
        {content}
      </Typography>
    </Box>
  );
};

export default CommentTypo;
