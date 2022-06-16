import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genresIcons from '../../assets/genres';
import useStyles from './styles';
import { useGetMovieQuery } from '../../services/TMDB';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  
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

  console.log(data);

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
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant='subtitle1' gutterBottom style={{marginLeft: '10px'}}></Typography>
            {data.vote_average} / 10
          </Box>
          <Typography variant='h6' align='center' gutterBottom>
            {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}`:""}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link key={genre.name} className={classes.links} to='/' onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img src={genresIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant='h5' gutterBottom style={{marginTop: '10px'}}>
            Overview
        </Typography>
        <Typography style={{marginBottom: '2rem'}}>
            {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
            Top Cast
        </Typography>
        <Grid item container spacing={2}>
            {data && data.credits?.cast?.map((character, i) => (
              character.profile_path && <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}}`} style={{textDecoration: 'none'}}>
                <img className={classes.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                <Typography color="textPrimary">{character?.name}</Typography>
                <Typography color={"textSecondary"}>
                  {character.character.split('/')[0]}
                </Typography>
              </Grid>
            )).slice(0,6)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieInformation;