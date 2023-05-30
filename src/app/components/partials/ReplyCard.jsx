import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import AddNestedReply from "./AddNestedReply";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Voting from "./Voting";
const ReplyCard = ({ reply, parentID, oldReplies }) => {
  const [openReply, setOpenReply] = React.useState(false);
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
