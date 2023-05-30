"use client";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const CommentTypo = ({ content, repliedTo, isEditing }) => {
  return (
    <Box>
      {isEditing ? (
        <Box>
          <TextField defaultValue={`@${repliedTo} ${content}`} />
        </Box>
      ) : (
        <Typography>
          {repliedTo && (
            <span className="font-bold text-moderateBlue">@{repliedTo} </span>
          )}
          {content}
        </Typography>
      )}
    </Box>
  );
};

export default CommentTypo;
