import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>

            <ListItemText
              primary={"List item 1"}
              secondary={"Secondary text"}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>

            <ListItemText
              primary={"List item 2"}
              secondary={"Secondary text"}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>

            <ListItemText
              primary={"List item 3"}
              secondary={"Secondary text"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
