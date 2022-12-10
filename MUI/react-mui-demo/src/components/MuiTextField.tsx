import React, { ChangeEvent, useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState<string>("");

  const onTextFieldChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label={"Name"} variant={"outlined"} />
        <TextField label={"Name"} variant={"filled"} />
        <TextField label={"Name"} variant={"standard"} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label={"Small secondary"}
          size={"small"}
          color={"secondary"}
        />
      </Stack>
      <Stack spacing={2}>
        <TextField
          label={"Form input"}
          required
          value={value}
          onChange={onTextFieldChange}
          error={!value}
          helperText={!value ? "Required" : ""}
        />
        <TextField
          label={"Form input"}
          helperText={"Helper text"}
          required
          error
        />
        <TextField
          label={"Password"}
          type={"password"}
          helperText={"Password"}
          disabled
        />
        <TextField label={"Read only"} InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2}>
        <TextField
          label={"Amount"}
          InputProps={{
            startAdornment: (
              <InputAdornment position={"start"}>$</InputAdornment>
            ),
          }}
        />
        <TextField
          label={"Weight"}
          InputProps={{
            endAdornment: <InputAdornment position={"end"}>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
