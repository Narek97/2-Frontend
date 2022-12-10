import React from "react";
import { ImageList, ImageListItem, Stack } from "@mui/material";

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img + index}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading={"lazy"}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default MuiImageList;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1526488469468-1e661c007ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
  },
];
