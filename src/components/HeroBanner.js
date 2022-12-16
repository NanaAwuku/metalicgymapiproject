import React from "react";
import { Box, Typography, Button } from "@mui/material";

import Banner from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="blue" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: { lg: "42px", xs: "40px" },

        }} mt="20px" mb="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="23px" lineHeight="34px" mb="30px">
        Check out the most effective exercises
      </Typography>

      <Typography fontSize="23px" color='blue'
        sx={{
          opacity: 0.1,
          display: {lg: "block", sm: "none"},
          fontSize:"200px",
          textTransform:"uppercase"
        }}
      fontWeight={600} lineHeight="34px" mb="100px" mt="100px">
        exercises
      </Typography>

      <Button variant="contained" sx={{padding: '15 px'}}>Explore Exercises</Button>
      <img src={Banner} alt="banner" className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
