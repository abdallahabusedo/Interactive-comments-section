import { Box } from "@mui/material";
import ReplyCard from "./ReplyCard";
import { getTimeFromString } from "@/app/utils/generals";
import MyReply from "./MyReply";
import React from "react";

const Replies = ({ replies, parentID }) => {
  let userData = JSON.parse(localStorage.getItem("userData"));

  return replies.length ? (
    <Box sx={{ display: "flex", ml: "20px", gap: "20px", mt: "10px" }}>
      <Box
        sx={{
          width: "3px",
          bgcolor: "hsl(239, 57%, 85%)",
          m: "15px 0 5px 0",
        }}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {replies
          .sort((A, B) => {
            if (A.score !== B.score) return B.score - A.score;
            const timeA = getTimeFromString(A.createdAt);
            const timeB = getTimeFromString(B.createdAt);
            return timeB - timeA;
          })
          .map((reply, index) => {
            console.log("==>", parentID, reply.id);
            if (reply.user.username == userData.username)
              return <MyReply key={index} reply={reply} />;
            else
              return (
                <ReplyCard
                  key={index}
                  reply={reply}
                  parentID={parentID}
                  replyId={reply.id}
                  oldReplies={replies}
                />
              );
          })}
      </Box>
    </Box>
  ) : null;
};

export default Replies;
