import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import Voting from "./Voting";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Replies from "./Replies";
const MyComments = ({ comment }) => {
  return (
    <Box>
      <Box sx={commentCard}>
        <Voting score={comment.score} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <CommentHeader
            user={comment.user}
            createdAt={comment.createdAt}
            isOwner={true}
          />
          <CommentTypo content={comment.content} />
        </Box>
      </Box>
      <Replies replies={comment.replies} />
    </Box>
  );
};

export default MyComments;
