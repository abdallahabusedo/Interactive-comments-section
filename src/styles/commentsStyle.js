export const commentCard = {
  display: "flex",
  width: "800px",
  gap: "20px",
  bgcolor: "white",
  p: "20px",
  borderRadius: "20px",
};

export const voteCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  minWidth: "50px",
  maxHeight: "120px",
  borderRadius: "15px",
  bgcolor: "hsl(223, 19%, 93%)",
};

export const voteNumber = {
  color: "hsl(238, 40%, 52%)",
  fontWeight: "700",
  fontSize: "20px",
};

export const commentHeader = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "20px",
  flex: "1",
};

export const replyButton = {
  display: "flex",
  gap: "10px",
  borderRadius: "10px",
  ":hover": {
    opacity: "50%",
  },
};
