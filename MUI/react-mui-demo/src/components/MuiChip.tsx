import React from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MuiChip = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip
        label={"Chip"}
        color={"primary"}
        size={"small"}
        icon={<AccountCircleIcon />}
      />
      <Chip
        label={"Chip outlined"}
        color={"secondary"}
        size={"small"}
        variant={"outlined"}
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label={"Delete"}
        color={"primary"}
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Alert")}
      />
    </Stack>
  );
};

export default MuiChip;
