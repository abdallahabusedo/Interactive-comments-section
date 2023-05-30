"use client";
import { commentHeader } from "@/styles/commentsStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ReplayButton from "./ReplayButton";

const MessageHeader = ({
  user,
  createdAt,
  isOwner,
  setOpenReply,
  parentId,
  replyId,
}) => {
  console.log("header", parentId, replyId);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={commentHeader}>
        <Box>
          <Image
            src={`${user && user.image.png}`}
            width={30}
            height={30}
            alt="pic"
          />
        </Box>
        <Typography>{user.username}</Typography>
        {isOwner && (
          <Typography
            sx={{
              bgcolor: "hsl(238, 40%, 52%)",
              color: "white",
              px: "8px",
              borderRadius: "5px",
              fontSize: { lg: "12px", xs: "10px" },
            }}
          >
            you
          </Typography>
        )}
        <Typography sx={{ fontSize: { lg: "12px", xs: "10px" } }}>
          {createdAt}
        </Typography>
      </Box>
      {isOwner ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <DeleteButton parentId={parentId} replyId={replyId} />
          <EditButton />
        </Box>
      ) : (
        <ReplayButton setOpenReply={setOpenReply} />
      )}
    </Box>
  );
};

export default MessageHeader;
