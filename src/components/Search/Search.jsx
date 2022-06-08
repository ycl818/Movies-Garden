import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useStyle from './styles'

const Search = () => {
  console.log("search");
  const classes = useStyle();
  const [query, setQuery] = useState('');
  const handleKeyPress = () => {

  }
  return (
    <div className={classes.searchContainer}>
      <TextField 
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant= "standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}

export default Search