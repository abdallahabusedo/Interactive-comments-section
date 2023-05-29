import { replyButton } from "@/styles/commentsStyle";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const DeleteButton = () => {
  return (
    <Button sx={{ ...replyButton, color: "#ED6368" }}>
      <Image src={"/images/icon-delete.svg"} width={12} height={12} alt="pic" />
      Delete
    </Button>
  );
};

export default DeleteButton;
