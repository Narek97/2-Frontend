import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const onRatingChange = (
    event: React.SyntheticEvent,
    value: number | null
  ) => {
    setValue(value);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={onRatingChange}
        precision={0.5}
        icon={<FavoriteIcon fontSize={"inherit"} color={"error"} />}
        emptyIcon={<FavoriteBorderIcon fontSize={"inherit"} />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
