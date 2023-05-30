import { formatDateAgo } from "@/app/utils/generals";
import {
  addCommentCard,
  addCommentContainer,
  sendButton,
} from "@/styles/commentsStyle";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React from "react";

const AddNestedReply = ({ replyingTo, parentID, oldReplies }) => {
  const [newComment, setNewComment] = React.useState("");

  let userData = JSON.parse(localStorage.getItem("userData"));
  const handleSend = () => {
    let reply = {
      content: newComment,
      createdAt: formatDateAgo(new Date()),
      score: 0,
      replyingTo: replyingTo,
      user: userData,
    };
    console.log(oldReplies);
    axios
      .patch(`http://localhost:3000/comments/${parentID}`, {
        replies: [...oldReplies, reply],
      })
      .then((res) => location.reload())
      .catch((error) => console.log(error));
  };
  return (
    <Box sx={{ maxWidth: "760px" }}>
      <Box sx={addCommentCard}>
        <Box sx={addCommentContainer}>
          <Image
            src={userData.image.png}
            width={40}
            height={40}
            alt="pic"
            loading="lazy"
          />
          <TextField
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            sx={{ flex: "1" }}
          />
          <Button onClick={handleSend} sx={sendButton}>
            Reply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddNestedReply;
