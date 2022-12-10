import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ acceptTnC });
  const onCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setAcceptTnC(event.target.checked);
  };
  console.log({ skills });
  const onCheckboxSkillsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox checked={acceptTnC} onChange={onCheckboxChange} />}
          label={"I accept terms and conditions"}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={onCheckboxChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={onCheckboxSkillsChange}
                />
              }
              label={"HTML"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={onCheckboxSkillsChange}
                />
              }
              label={"CSS"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={"js"}
                  checked={skills.includes("js")}
                  onChange={onCheckboxSkillsChange}
                />
              }
              label={"JS"}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
