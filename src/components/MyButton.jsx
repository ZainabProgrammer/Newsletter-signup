import { Button } from "@mui/material";
import React from "react";

const btnStyle = {
  marginTop: 3,
  textTransform: "none",
  background: "hsl(234, 29%, 20%)",
  p: "15px 0",
  borderRadius: "7px",
  fontWeight: "bold",
  ":hover": {
    background: "linear-gradient(to right, #e75480, hsl(4, 100%, 67%))",
    boxShadow: " 0px  15px 28px hsl(4, 100%, 87%)",
  },
};
const MyButton = ({ onClick, type, title }) => {
  return (
    <div>
      <Button
        sx={{ ...btnStyle }}
        variant="contained"
        fullWidth
        onClick={onClick}
        type={type}
      >
        {title}
      </Button>
    </div>
  );
};

export default MyButton;
