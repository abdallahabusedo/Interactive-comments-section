export const commentCard = {
  display: "flex",
  flexDirection: {
    lg: "row",
    md: "column-reverse",
    sm: "column-reverse",
    xs: "column-reverse",
  },
  width: { lg: "800px", md: "800px", sm: "500px", xs: "330px" },
  gap: "20px",
  bgcolor: "white",
  p: "20px",
  borderRadius: "20px",
};

export const voteCard = {
  display: "flex",
  flexDirection: {
    lg: "column",
    md: "column",
    sm: "row",
    xs: "row",
  },
  justifyContent: "space-evenly",
  alignItems: "center",
  minWidth: {
    lg: "50px",
    md: "50px",
    sm: "30px",
    xs: "30px",
  },
  maxWidth: { lg: "150px", md: "150px", sm: "120px", xs: "120px" },
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
  width: "100%",
};

export const replyButton = {
  display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
  gap: "10px",
  borderRadius: "10px",
  ":hover": {
    opacity: "50%",
  },
};

export const addCommentCard = {
  display: "flex",
  alignItems: "start",
  bgcolor: "white",
  p: "20px",
  borderRadius: "20px",
  mt: "10px",
  mb: "10px",
};

export const addCommentContainer = {
  display: "flex",
  width: { lg: "760px", md: "760px", sm: "500px", xs: "300px" },
  gap: "20px",
  alignItems: "start",
  justifyContent: "space-evenly",
  mt: "10px",
};

export const sendButton = {
  bgcolor: "#5357b6 !important",
  color: "white",
  borderRadius: "10px",
  p: "10px 22px",
  ":hover": {
    bgcolor: "#5357b6aa !important",
  },
};
