import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

const japaneseFoodImages = [
  {
    img: "https://img.freepik.com/free-photo/seaweed-white-seafood-plate-sushi_1203-5835.jpg?w=996&t=st=1679850866~exp=1679851466~hmac=75e5d37cada5f45cec66f2fe6a54597848cc761ad97194b54f7e9baaed70c22b",
    title: "Sushi",
  },
  {
    img: "https://img.freepik.com/free-photo/bowl-noodles-with-green-onion-top_1340-23426.jpg?w=996&t=st=1679850810~exp=1679851410~hmac=01f83b0ba2f200a8b3eb4e0d11b936defd803f065bc90f5035058120c5fee5d3",
    title: "Ramen",
  },
  {
    img: "https://img.freepik.com/free-photo/tempura-food-japanese-food_1339-5712.jpg?w=996&t=st=1679850917~exp=1679851517~hmac=a22670de28d057e426368cb3f4a33c102c89fb4f914c246deefc997fb8ea9665",
    title: "Tempura",
  },
  {
    img: "https://img.freepik.com/free-photo/high-angle-hands-cooking-japanese-street-food_23-2149410195.jpg?w=996&t=st=1679850990~exp=1679851590~hmac=2786878fba676066efe1a39e64951a69651ae975ee91a35abc8463d46a73aec3",
    title: "Yakitori",
  },
];

const Rightbar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } } } pr={5}>
      <Box display={"flex"} flexDirection={"column"} mt={2} mb={2} m>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 250 }} cols={2}>
          {japaneseFoodImages.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
