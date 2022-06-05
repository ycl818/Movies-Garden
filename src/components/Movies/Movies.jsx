import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMovieQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMovieQuery();

  console.log(data);

  return (
    <div>Movies</div>
  )
}

export default Movies;