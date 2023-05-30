import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import Voting from "./Voting";
import CommentTypo from "./CommentTypo";
import CommentHeader from "./CommentHeader";

const MyReply = ({ reply }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ ...commentCard, width: "760px" }}>
        <Voting score={reply.score} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <CommentHeader
            user={reply.user}
            createdAt={reply.createdAt}
            isOwner={true}
          />
          <CommentTypo content={reply.content} repliedTo={reply.replyingTo} />
        </Box>
      </Box>
    </Box>
  );
};

export default MyReply;
