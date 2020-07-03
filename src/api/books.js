import server from './config';

export const getAllBooks = () => {
  return server.get('books').then(res => res.data);
};
