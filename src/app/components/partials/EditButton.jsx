import { replyButton } from "@/styles/commentsStyle";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const EditButton = () => {
  return (
    <Button sx={replyButton}>
      <Image src={"/images/icon-edit.svg"} width={12} height={12} alt="pic" />
      Edit
    </Button>
  );
};

export default EditButton;
