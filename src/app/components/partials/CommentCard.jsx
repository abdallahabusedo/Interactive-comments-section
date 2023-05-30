"use client";
import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import AddReply from "../AddReply";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Replies from "./Replies";
import Voting from "./Voting";
const CommentCard = ({ comment }) => {
  const [openReply, setOpenReply] = React.useState(false);
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
          <CommentHeader
            user={comment.user}
            createdAt={comment.createdAt}
            isOwner={false}
            setOpenReply={setOpenReply}
          />
          <CommentTypo content={comment.content} />
        </Box>
      </Box>
      {openReply && (
        <AddReply
          id={comment.id}
          oldReplies={comment.replies}
          replyingTo={comment.user.username}
        />
      )}
      <Replies replies={comment.replies} parentID={comment.id} />
    </Box>
  );
};

export default CommentCard;
