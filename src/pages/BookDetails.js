import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/books';
import Page from '../components/Page';
import ReviewList from '../components/ReviewList';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    API.getBook(id).then(book => setBook(book));
  }, [id]);

  return book._id ? (
    <Page>
      <div>
        <strong>{book.name}</strong>
      </div>
      <div>Reviews: {book.reviews.length}</div>
      <ReviewList reviews={book.reviews} />
    </Page>
  ) : (
    false
  );
};

export default BookDetails;
