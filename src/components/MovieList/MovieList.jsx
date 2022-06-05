import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

const MovieList = () => {
  const classes = useStyles();
  console.log('movie list'); 

  return (
    <Grid container className={classes.movieContainer}>
      MovieList
    </Grid>
  )
}

export default MovieList