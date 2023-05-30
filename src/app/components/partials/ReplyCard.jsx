import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Voting from "./Voting";
import AddReply from "../AddReply";
import AddNestedReply from "./AddNestedReply";
const ReplyCard = ({ reply, parentID, oldReplies }) => {
  const [openReply, setOpenReply] = React.useState(false);

  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log("replies", oldReplies);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ ...commentCard, width: "760px" }}>
        <Voting score={reply.score} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CommentHeader
            user={reply.user}
            createdAt={reply.createdAt}
            setOpenReply={setOpenReply}
            isOwner={false}
          />
          <CommentTypo content={reply.content} repliedTo={reply.replyingTo} />
        </Box>
      </Box>
      {openReply && (
        <AddNestedReply
          id={reply.id}
          replyingTo={reply.user.username}
          parentID={parentID}
          oldReplies={oldReplies}
        />
      )}
    </Box>
  );
};

export default ReplyCard;
