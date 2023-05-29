import { Box } from "@mui/material";
import ReplyCard from "./ReplyCard";

const Replies = ({ replies }) => {
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
          return <ReplyCard reply={reply} />;
        })}
      </Box>
    </Box>
  ) : null;
};

export default Replies;
