import React, { forwardRef, useState } from "react";
import {
  Alert,
  AlertProps,
  Button,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onSnackbarClose = (
    event?: React.SyntheticEvent<any> | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/*<Snackbar*/}
      {/*  message={"Form submitted successfully"}*/}
      {/*  autoHideDuration={4000}*/}
      {/*  open={open}*/}
      {/*  onClose={onSnackbarClose}*/}
      {/*  anchorOrigin={{*/}
      {/*    vertical: "bottom",*/}
      {/*    horizontal: "center",*/}
      {/*  }}*/}
      {/*/>*/}
      <Snackbar open={open} autoHideDuration={6000} onClose={onSnackbarClose}>
        <SnackbarAlert onClose={onSnackbarClose} severity={"success"}>
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
