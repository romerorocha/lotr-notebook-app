import server from '../config/server';

export const getAllBooks = () => {
  return server.get('books').then(res => res.data);
};

export const getBook = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const addReview = (bookId, review) => {
  return server.post(`books/${bookId}/reviews`, review).then(res => res.data);
};

export const updateReview = (bookId, review) => {
  return server
    .put(`books/${bookId}/reviews/${review._id}`, review)
    .then(res => res.data);
};

export const deleteReview = (bookId, reviewId) => {
  return server
    .delete(`books/${bookId}/reviews/${reviewId}`)
    .then(res => res.data);
};
