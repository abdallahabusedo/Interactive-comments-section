import { commentCard } from "@/styles/commentsStyle";
import { Box } from "@mui/material";
import React from "react";
import CommentHeader from "./CommentHeader";
import CommentTypo from "./CommentTypo";
import Replies from "./Replies";
const MyComments = ({ comment }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <Box>
      <Box sx={commentCard}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <CommentHeader
            user={comment.user}
            createdAt={comment.createdAt}
            isOwner={true}
          />
          <CommentTypo isEditing={isEditing} content={comment.content} />
        </Box>
      </Box>
      <Replies replies={comment.replies} parentID={comment.id} />
    </Box>
  );
};

export default MyComments;
