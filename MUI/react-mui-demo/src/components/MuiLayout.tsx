import React from "react";
import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: 2 }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={0.5}
        divider={<Divider orientation={"vertical"} flexItem />}
      >
        <Box
          // component={"span"}
          sx={{
            backgroundColor: "red",
            color: "blue",
            width: "200px",
            height: "200px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
        >
          Text
        </Box>
        <Box
          // component={"span"}
          sx={{
            backgroundColor: "yellow",
            color: "blue",
            width: "200px",
            height: "200px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "orange    ",
            },
          }}
        >
          Text 2
        </Box>
      </Stack>

      <Grid container>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1{" "}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2{" "}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3{" "}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4{" "}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
