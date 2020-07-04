import server from './config';

export const getAllBooks = () => {
  return server.get('books').then(res => res.data);
};

export const getBook = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const addReview = (bookId, review) => {
  return server.post(`books/${bookId}/reviews`, review).then(res => res.data);
};
