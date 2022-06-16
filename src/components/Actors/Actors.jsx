import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams  } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import useStyles from './styles';
import { useGetActorsDetailsQuery } from '../../services/TMDB';

// use useParams to get the actor's id
// make a new call using redux toolkit query -> get actor details call
// research tmdb api docs ...
// use newly created useGetActorHook to get actor's info th the component

const Actors = () => {

  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const history = useHistory();
  const classes = useStyles();

  console.log(data);
  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center"> 
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if(error) {
    return (
      <Box display="flex" justifyContent="center" alignContent="center"> 
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  return (
   <>
    <Grid container spacing={3}>
      <Grid item lg={5} xl={4}>
        <img 
        className={classes.image}
        src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
        alt={data.name}
        />
      </Grid>
    </Grid>
   </>
  )
}

export default Actors;