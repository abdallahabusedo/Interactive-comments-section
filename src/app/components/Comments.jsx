"use client";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import CommentCard from "./partials/CommentCard";
import { getTimeFromString } from "../utils/generals";
import MyComments from "./partials/MyComments";
const Comments = ({ userData }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/comments",
      })
      .then((res) => {
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
      {comments
        .sort((A, B) => {
          if (A.score !== B.score) return B.score - A.score;
          const timeA = getTimeFromString(A.createdAt);
          const timeB = getTimeFromString(B.createdAt);
          return timeA - timeB;
        })
        .map((comment) => {
          if (comment.user.username != userData.username)
            return <CommentCard comment={comment} />;
          else return <MyComments comment={comment} />;
        })}
    </Box>
  );
};

export default Comments;
