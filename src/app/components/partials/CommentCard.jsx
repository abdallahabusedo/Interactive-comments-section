"use client";
import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Replies from "./Replies";
import Voting from "./Voting";
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
      <Replies replies={comment.replies} />
    </Box>
  );
};

export default CommentCard;
