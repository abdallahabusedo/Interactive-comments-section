"use client";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import CommentCard from "./partials/CommentCard";
import { getTimeFromString } from "../utils/generals";
import MyComments from "./partials/MyComments";
const Comments = () => {
  const [comments, setComments] = React.useState([]);
  let userData = JSON.parse(localStorage.getItem("userData"));

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
        .map((comment, index) => {
          if (comment.user.username != userData.username)
            return <CommentCard key={index} comment={comment} />;
          else return <MyComments key={index} comment={comment} />;
        })}
    </Box>
  );
};

export default Comments;
