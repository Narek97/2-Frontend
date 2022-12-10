import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState<string>("");
  console.log({ value });
  const onRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label={"job-experience-group-label"}
          value={value}
          onChange={onRadioGroupChange}
          row
        >
          <FormControlLabel
            control={<Radio size={"medium"} color={"secondary"} />}
            label={"0-2"}
            value={"0-2"}
          />
          <FormControlLabel control={<Radio />} label={"3-5"} value={"3-5"} />
          <FormControlLabel control={<Radio />} label={"6-10"} value={"6-10"} />
        </RadioGroup>
        <FormHelperText>Message</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
