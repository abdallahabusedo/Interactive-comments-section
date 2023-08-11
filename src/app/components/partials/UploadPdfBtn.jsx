import { Button } from "@mui/material";
import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { sendButton } from "@/styles/commentsStyle";
import axios from "axios";

const UploadPdfBtn = () => {
  const fileInputRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("pdfFile", selectedFile);
      console.log(selectedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <label className="custom-button" onClick={triggerFileInput}>
        <button
          onClick={handleUpload}
          style={{
            backgroundColor: "#5357b6",
            color: "white",
            borderRadius: "10px",
            padding: "10px 22px",
          }}
        >
          <DriveFolderUploadIcon />
        </button>
      </label>
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf, image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadPdfBtn;
