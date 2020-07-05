import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/books';
import Page from '../components/Page';
import Reviews from '../components/Reviews';

const getReviewsAverage = reviews => {
  if (!reviews || reviews.length === 0) {
    return 0;
  }

  const sum = reviews.reduce((acc, item) => acc + item.stars, 0);
  const avg = sum / reviews.length;

  return avg;
};

const BookDetails = () => {
  const { id } = useParams();

  const [showForm, setShowForm] = useState(false);

  const [book, setBook] = useState({});
  const ratingAverage = getReviewsAverage(book.reviews);

  useEffect(() => {
    API.getBook(id).then(book => setBook(book));
  }, [id]);

  const toggleForm = () => setShowForm(!showForm);

  const handleAddReview = review => {
    return API.addReview(book._id, review).then(newReview => {
      const newBook = { ...book, reviews: book.reviews.concat(newReview) };
      setBook(newBook);
    });
  };

  const handleUpdateReview = review => {
    return API.updateReview(book._id, review).then(newReview => {
      const newReviews = book.reviews.map(r => {
        return r._id === newReview._id ? newReview : r;
      });
      const newBook = { ...book, reviews: newReviews };
      setBook(newBook);
    });
  };

  const handleDeleteReview = id => {
    API.deleteReview(book._id, id).then(() => {
      const newReviews = book.reviews.filter(r => r._id !== id);
      const newBook = { ...book, reviews: newReviews };
      setBook(newBook);
    });
  };

  return book._id ? (
    <Page>
      <div>
        <strong>{book.name}</strong>
      </div>
      <div>Reviews: {book.reviews.length}</div>
      <div>Rating Average: {ratingAverage}</div>
      <div>
        <button onClick={toggleForm}>Add review</button>
      </div>
      <Reviews
        reviews={book.reviews}
        showForm={showForm}
        toggleForm={toggleForm}
        handleAdd={handleAddReview}
        handleUpdate={handleUpdateReview}
        handleDelete={handleDeleteReview}
      />
    </Page>
  ) : (
    `There's no book for the ID ${id}`
  );
};

export default BookDetails;
