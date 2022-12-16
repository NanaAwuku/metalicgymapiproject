import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { ExerciseOptions, fetchData } from "../utils/FetchData";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercieseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercieseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );

      const searchedExercise = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercise);
    }
  };

  return (
    <Stack alignItems="center" mt={10} justifyContent="center" p="20px">
      <Typography
        fontWeight="600"
        sx={{
          fontSize: { lg: "42px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="63px">
        <TextField
          sx={{
            input: { fontWeight: "600", border: "none", borderRadius: "5px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="73px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="search exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "blue",
            textTransform: "none",
            width: { lg: "170px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            color: "white",
            height: "54px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box 
      sx={{
        width: "100%",
        position: "relative",
        p: "20px"
      }}
      >
        <HorizontalScrollbar data={bodyParts}
        bodyPart={bodyPart} setBodyPart={setBodyPart}
        />

      </Box>
    </Stack>
  );
};

export default SearchExercises;
