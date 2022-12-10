import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const onDrawerClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        size={"large"}
        edge={"start"}
        color={"inherit"}
        aria-label={"logo"}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={isDrawerOpen} onClose={onDrawerClose}>
        <Box p={2} width={"250px"} textAlign={"center"} role={"presentation"}>
          <Typography variant={"h6"} component={"div"}>
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
