import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

const MuiTooltip = () => {
  return (
    <Tooltip
      title={"Tooltip title"}
      placement={"right"}
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
