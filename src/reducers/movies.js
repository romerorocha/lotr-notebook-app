const { LOAD_MOVIES, UPDATE_MOVIE } = require('../actions/movies');

const movies = (state = [], action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return action.movies;
    case UPDATE_MOVIE:
      return state.map(m => (m._id === action.movie._id ? action.movie : m));
    default:
      return state;
  }
};

export default movies;
