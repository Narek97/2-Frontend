import React, { ChangeEvent, useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  // const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log({ countries });

  const onTextFieldChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    // setCountry(event.target.value);
    const value = event.target.value;
    setCountries(typeof value === "object" ? value : value.split(","));
  };

  return (
    <Box width={"250px"}>
      <TextField
        label={"Select country"}
        select
        // value={country}
        value={countries}
        onChange={onTextFieldChange}
        fullWidth
        variant={"standard"}
        SelectProps={{
          multiple: true,
        }}
        size={"small"}
        // helperText={"Please select country"}
      >
        <MenuItem value={"US"}>USA</MenuItem>
        <MenuItem value={"EN"}>ENG</MenuItem>
        <MenuItem value={"AU"}>Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
