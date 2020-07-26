import * as API from '../api/movies';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

const load = movies => ({
  type: LOAD_MOVIES,
  movies,
});

export const loadMovies = () => dispatch => {
  return API.getAllMovies().then(movies => dispatch(load(movies)));
};

const update = movie => ({
  type: UPDATE_MOVIE,
  movie,
});

export const addToBookmarks = id => dispatch => {
  return API.update(id, { bookmarked: true }).then(movie =>
    dispatch(update(movie))
  );
};

export const addToWatched = id => dispatch => {
  return API.update(id, { watched: true }).then(movie =>
    dispatch(update(movie))
  );
};

export const resetMovie = id => dispatch => {
  return API.update(id, { bookmarked: false, watched: false }).then(movie =>
    dispatch(update(movie))
  );
};

export const voteMovie = (id, option) => dispatch => {
  return API.vote(id, option).then(movie => dispatch(update(movie)));
};
