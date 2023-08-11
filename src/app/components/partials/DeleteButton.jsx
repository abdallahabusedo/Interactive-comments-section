import { replyButton } from "@/styles/commentsStyle";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React from "react";

const DeleteButton = ({ parentId, replyId }) => {
  const handleDelete = () => {
    axios
      .request({
        method: "get",
        url: `http://localhost:3000/comments/${1}`,
      })
      .then((res) => {
        // location.reload();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Button sx={{ ...replyButton, color: "#ED6368" }} onClick={handleDelete}>
      <Image src={"/images/icon-delete.svg"} width={12} height={12} alt="pic" />
      Delete
    </Button>
  );
};

export default DeleteButton;
