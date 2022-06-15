import React from 'react';
import { useSelector } from 'react-redux';

import {  userSelector } from '../../features/auth'
// Get access ro profile name or id from redux slice
// display in the profile component

const Profile = () => {
  const { user } = useSelector(userSelector)
  console.log('Profile');
  return (
    <div>Profile -{user.username}</div>
  )
}

export default Profile;