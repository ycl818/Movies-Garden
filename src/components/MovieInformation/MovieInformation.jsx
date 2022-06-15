import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import useStyles from './styles';
import { useGetMovieQuery } from '../../services/TMDB';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  
  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignContent="center"> 
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if(error) {
    return (
      <Box display="flex" justifyContent="center" alignContent="center"> 
        <Link to='/'>Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}> {/* another inner Grid container */}
        <Typography variant='h3' align='center' gutterBottom>
          {data?.title} ({(data.release_date.split('-')[0])})
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          {data?.tagline} 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default MovieInformation;