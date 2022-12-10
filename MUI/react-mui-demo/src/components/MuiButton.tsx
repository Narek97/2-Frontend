import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  // const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });
  const onToggleButtonGroupChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string[]
    // value: string | null
  ) => {
    setFormats(value);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant={"text"} href={"https://google.com"}>
          Text
        </Button>
        <Button variant={"contained"}>Contained</Button>
        <Button variant={"outlined"}>Outline</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant={"contained"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"contained"} color={"secondary"}>
          Secondary
        </Button>
        <Button variant={"contained"} color={"error"}>
          Error
        </Button>
        <Button variant={"contained"} color={"warning"}>
          Warning
        </Button>
        <Button variant={"contained"} color={"success"}>
          Success
        </Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant={"contained"} size={"small"}>
          Small
        </Button>
        <Button variant={"contained"} size={"medium"}>
          Medium
        </Button>
        <Button variant={"contained"} size={"large"}>
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button
          variant={"contained"}
          startIcon={<SendIcon />}
          disableRipple={true}
        >
          Send
        </Button>

        <Button
          variant={"contained"}
          endIcon={<SendIcon />}
          disableElevation={true}
        >
          Send 2
        </Button>
        <IconButton aria-label={"send"} color={"success"} size={"small"}>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup variant={"contained"} aria-label={"aria-label-group"}>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label={"text formatting"}
          value={formats}
          onChange={onToggleButtonGroupChange}
          size={"small"}
          color={"success"}
          orientation={"vertical"}
          // exclusive={true}
        >
          <ToggleButton value={"bold"} aria-label={"bold"}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label={"italic"}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label={"underlined"}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
