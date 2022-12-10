import React from "react";
import { Box } from "@mui/material";
import { StyleBox } from "../muiTheme/typographyTheme";

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: "neutral.main",
        }}
      ></Box>
      <StyleBox />
    </>
  );
};

export default MuiResponsiveness;
