import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Voting from "./Voting";
const ReplyCard = ({ reply }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ ...commentCard, width: "760px" }}>
        <Voting score={reply.score} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CommentHeader user={reply.user} />
          <CommentTypo content={reply.content} repliedTo={reply.replyingTo} />
        </Box>
      </Box>
    </Box>
  );
};

export default ReplyCard;
