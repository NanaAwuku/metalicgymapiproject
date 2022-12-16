import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercise from '../components/Exercise'
import SearchExercises from '../components/SearchExercises'


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home