import React from "react";
import { Typography } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography fontSize="1.5rem" fontWeight="bold">
      {children}
    </Typography>
  );
};

export default Title;
