import React from 'react';
import { Typography, Box } from '@mui/material';

import { Movie } from '..';  
import useStyle from './styles';

const RatedCards = ({ title, data }) => {
  const classes = useStyle();

  return (
    <Box>
      <Typography variant='h5' gutterBottom>{title}</Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
            <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  )
}

export default RatedCards