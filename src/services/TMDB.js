import { Movie } from '@mui/icons-material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath:'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3'}),
  endpoints: (builder) => ({
    // * Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`
    }),

    // * Get Movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        
        // * Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // * Get Movies by Category
        //popular, top_rated, upcoming -> string
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return  `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // * Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return  `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // * Get Popular Movies
        return  `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      }
    }),

    //* Get Movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
    }),

    // * Get user Specific list
    getRecommendation: builder.query({
      query: ({movie_id, list}) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`
    }),

    getActorsDetails: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`
    }),
  }),
});

// use endpoint created by createApi will auto create a hook
export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationQuery,
  useGetActorsDetailsQuery,
} = tmdbApi; // from this