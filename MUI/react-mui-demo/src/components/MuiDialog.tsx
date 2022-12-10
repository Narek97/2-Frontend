import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MuiDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        aria-labelledby={"dialog-title"}
        aria-describedby={"dialog-description"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            consequuntur culpa eius excepturi expedita explicabo id laudantium
            libero maiores nam necessitatibus neque nisi officiis porro quaerat
            quia quis sit voluptates!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
