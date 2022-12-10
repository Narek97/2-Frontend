import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant={"h1"}>H1 Heading</Typography>
      <Typography variant={"h2"}>H2 Heading</Typography>
      <Typography variant={"h3"}>H3 Heading</Typography>
      <Typography variant={"h4"}>H4 Heading</Typography>
      <Typography variant={"h5"}>H5 Heading</Typography>
      <Typography variant={"h6"}>H6 Heading</Typography>

      <Typography variant={"h6"} component={"h1"}>
        H1 Heading like H6
      </Typography>

      <Typography variant={"subtitle1"}>Subtitle 1</Typography>
      <Typography variant={"subtitle2"}>Subtitle 2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet
        aperiam dolor dolores eius est ipsa, ipsam labore, minima odit placeat
        quidem quod reiciendis saepe similique soluta, tenetur vitae voluptates.
      </Typography>
      <Typography variant={"body1"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut
        commodi, consectetur delectus deleniti dicta dolor dolorem doloremque
        dolores enim facilis ipsam, nesciunt odio perferendis quas quia tempora,
        tempore?
      </Typography>
      <Typography variant={"body2"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquam consequuntur distinctio dolores doloribus explicabo facilis hic
        incidunt labore, minus molestias nemo optio pariatur placeat quod
        sapiente sequi ut voluptatum!
      </Typography>
    </div>
  );
};

export default MuiTypography;
