export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

export const loadMovies = movies => ({
  type: LOAD_MOVIES,
  movies,
});

export const updateMovies = movie => ({
  type: UPDATE_MOVIE,
  movie,
});
