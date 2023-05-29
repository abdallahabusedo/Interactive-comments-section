"use client";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import CommentCard from "./partials/CommentCard";
const Comments = () => {
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/comments",
      })
      .then((res) => {
        console.log("data", res.data);
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        mt: "20px",
      }}
    >
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </Box>
  );
};

export default Comments;
