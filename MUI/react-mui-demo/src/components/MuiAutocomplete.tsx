import React, { useState } from "react";
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Stack,
  TextField,
} from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const MuiAutocomplete = () => {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  const [value, setValue] = useState<string | null>(null);
  console.log({ value });
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });

  const onAutocompleteChange = (
    event: React.SyntheticEvent,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown>
  ) => {
    setValue(value);
  };

  const onAutocompleteSkillChange = (
    event: React.SyntheticEvent,
    value: Skill | null
  ) => {
    setSkill(value);
  };

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label={"Skills"} />}
        options={skills}
        value={value}
        onChange={onAutocompleteChange}
        // freeSolo
      />

      <Autocomplete
        renderInput={(params) => <TextField {...params} label={"Skills"} />}
        options={skillOptions}
        value={skill}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        onChange={onAutocompleteSkillChange}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
