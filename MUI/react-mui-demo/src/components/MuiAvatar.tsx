import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <Avatar variant={"square"} sx={{ bgcolor: "red" }}>
          BW
        </Avatar>
        <Avatar
          variant={"rounded"}
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"Jane Doe"}
          />
          <Avatar
            src={
              "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"Jane Doe"}
          />
          <Avatar
            src={
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"Jane Doe"}
          />
          <Avatar
            src={
              "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"Jane Doe"}
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
