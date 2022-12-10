import React from "react";
import { Badge, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color={"primary"}>
        <EmailIcon />
      </Badge>
      <Badge badgeContent={5} color={"secondary"} showZero>
        <EmailIcon />
      </Badge>
      <Badge
        badgeContent={100}
        color={"primary"}
        // max={999}
      >
        <EmailIcon />
      </Badge>
      <Badge variant={"dot"} color={"primary"} invisible={true}>
        <EmailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
