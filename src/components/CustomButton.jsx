import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, text, icon }) => {
  return (
    <Button
      sx={{ fontSize: "1.5rem" }}
      variant="outlined"
      onClick={onClick}
      startIcon={icon}
      size="large"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
