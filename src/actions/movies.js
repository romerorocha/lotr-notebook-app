import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../api/movies';

export const loadMovies = createAsyncThunk('movies/load', () =>
  API.getAllMovies().then(movies => movies)
);

export const updateMovie = createAsyncThunk(
  'movies/update',
  ({ id, bookmarked, watched }) =>
    API.update(id, { bookmarked, watched }).then(movie => movie)
);

export const voteMovie = createAsyncThunk('movies/vote', ({ id, option }) =>
  API.vote(id, option).then(movie => movie)
);
