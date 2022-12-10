import React, { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <IconButton
          size={"large"}
          edge={"start"}
          color={"inherit"}
          aria-label={"logo"}
        >
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant={"h6"} component={"div"} sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color={"inherit"}>Features</Button>
          <Button color={"inherit"}>Pricing</Button>
          <Button color={"inherit"}>About</Button>
          <Button
            color={"inherit"}
            id={"resources-button"}
            aria-labelledby={open ? "resources-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup={"true"}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color={"inherit"}>Login</Button>
        </Stack>
        <Menu
          id={"resources-menu"}
          anchorEl={anchorElement}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
