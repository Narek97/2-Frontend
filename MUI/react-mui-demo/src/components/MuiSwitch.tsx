import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const onSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onSwitchChange} />}
        label={"Dark mode"}
      ></FormControlLabel>
    </Box>
  );
};

export default MuiSwitch;
