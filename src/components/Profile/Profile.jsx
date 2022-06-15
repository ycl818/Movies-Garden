import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import {  userSelector } from '../../features/auth'
// Get access ro profile name or id from redux slice
// display in the profile component

const Profile = () => {
  const { user } = useSelector(userSelector)
  console.log('Profile');

  const favoriteMovies = [];

  // clear localStorage and redirect the page
  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant='h4' gutterBottom>My Profile</Typography>
        <Button color='inherit' onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
     {!favoriteMovies.length 
     ? <Typography variant='h5'>Add favorites movies to see them here!</Typography>
     : ( 
        <Box>
          FAVORITE MOVIES
        </Box>
     )}
    </Box>
  );
};

export default Profile;