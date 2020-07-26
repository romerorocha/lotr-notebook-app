import * as API from '../api/books';
export const LOAD_BOOKS = 'LOAD_BOOKS';

const load = books => ({
  type: LOAD_BOOKS,
  books,
});

export const loadBooks = () => dispatch => {
  return API.getAllBooks().then(books => dispatch(load(books)));
};
