import React from "react";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity={"error"}>
        <AlertTitle>Error</AlertTitle>
        This is error alert
      </Alert>
      <Alert severity={"warning"} action={<Button>UNDO</Button>}>
        <AlertTitle>Warning</AlertTitle>
        This is warning alert
      </Alert>
      <Alert severity={"info"} onClose={() => alert("Close")}>
        <AlertTitle>Info</AlertTitle>
        This is info alert
      </Alert>
      <Alert severity={"success"} icon={<CheckIcon />}>
        <AlertTitle>Success</AlertTitle>
        This is success alert
      </Alert>

      <Alert variant={"outlined"} severity={"error"}>
        This is error alert
      </Alert>
      <Alert variant={"outlined"} severity={"warning"}>
        This is warning alert
      </Alert>
      <Alert variant={"outlined"} severity={"info"}>
        This is info alert
      </Alert>
      <Alert variant={"outlined"} severity={"success"}>
        This is success alert
      </Alert>

      <Alert variant={"filled"} severity={"error"}>
        This is error alert
      </Alert>
      <Alert variant={"filled"} severity={"warning"}>
        This is warning alert
      </Alert>
      <Alert variant={"filled"} severity={"info"}>
        This is info alert
      </Alert>
      <Alert variant={"filled"} severity={"success"}>
        This is success alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
