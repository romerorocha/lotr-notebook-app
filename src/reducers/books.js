const { LOAD_BOOKS } = require('../actions/books');

const books = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default books;
