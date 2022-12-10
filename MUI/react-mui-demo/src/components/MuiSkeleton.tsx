import React from "react";
import { Skeleton, Stack } from "@mui/material";

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width={"250px"}>
      <Skeleton width={210} height={20} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
};

export default MuiSkeleton;
