import { Box } from "@mui/material";
import React from "react";
import Voting from "./Voting";
import CommentTypo from "./CommentTypo";
import CommentHeader from "./CommentHeader";
import { commentCard } from "@/styles/commentsStyle";

const ReplyCard = ({ replies }) => {
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
        {replies.map((reply) => {
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
                  <CommentTypo
                    content={reply.content}
                    repliedTo={reply.replyingTo}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : null;
};

export default ReplyCard;
