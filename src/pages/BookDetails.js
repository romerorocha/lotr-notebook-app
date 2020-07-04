import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/books';
import Page from '../components/Page';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    API.getBook(id).then(book => setBook(book));
  }, [id]);

  const toggleForm = () => setShowForm(!showForm);

  const handleAddReview = review => {
    return API.addReview(book._id, review).then(review => {
      const newBook = { ...book, reviews: book.reviews.concat(review) };
      setBook(newBook);
    });
  };

  return book._id ? (
    <Page>
      <div>
        <strong>{book.name}</strong>
      </div>
      <div>Reviews: {book.reviews.length}</div>
      <div>
        <button onClick={toggleForm}>Add review</button>
      </div>
      {showForm && <ReviewForm addReview={handleAddReview} />}
      <ReviewList reviews={book.reviews} />
    </Page>
  ) : (
    `There's no book for the ID ${id}`
  );
};

export default BookDetails;
