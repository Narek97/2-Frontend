import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"140"}
          image={
            "https://images.unsplash.com/photo-1669401231726-8d572455d711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          }
          alt={"unsplash image"}
        />
        <CardContent>
          <Typography gutterBottom variant={"h5"} component={"div"}>
            React
          </Typography>
          <Typography gutterBottom variant={"body2"} color={"text.secondary"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            cupiditate eligendi error temporibus! Accusantium, eaque maiores
            nihil non odio sapiente totam. Maiores natus nesciunt nihil officia
            repellat rerum tempore veniam.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
