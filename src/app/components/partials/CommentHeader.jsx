"use client";
import { commentHeader } from "@/styles/commentsStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ReplayButton from "./ReplayButton";

const MessageHeader = ({ user, createdAt, isOwner, setOpenReply }) => {
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
            }}
          >
            you
          </Typography>
        )}
        <Typography>{createdAt}</Typography>
      </Box>
      {isOwner ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <DeleteButton />
          <EditButton />
        </Box>
      ) : (
        <ReplayButton setOpenReply={setOpenReply} />
      )}
    </Box>
  );
};

export default MessageHeader;
