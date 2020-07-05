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
  const [reviews, setReviews] = useState([]);
  const ratingAverage = getReviewsAverage(reviews);

  useEffect(() => {
    API.getBook(id).then(book => {
      const { _id, name, reviews } = book;
      setBook({ _id, name });
      setReviews(reviews);
    });
  }, [id]);

  const toggleForm = () => setShowForm(!showForm);

  const handleAddReview = review => {
    return API.addReview(book._id, review).then(newReview =>
      setReviews(reviews.concat(newReview))
    );
  };

  const handleUpdateReview = review => {
    return API.updateReview(book._id, review).then(data => {
      const newList = reviews.map(r => (r._id === data._id ? data : r));
      setReviews(newList);
    });
  };

  const handleDeleteReview = id => {
    API.deleteReview(book._id, id).then(() => {
      const newList = reviews.filter(r => r._id !== id);
      setReviews(newList);
    });
  };

  return book._id ? (
    <Page>
      <div>
        <strong>{book.name}</strong>
      </div>
      <div>Reviews: {reviews.length}</div>
      <div>Rating Average: {ratingAverage}</div>
      <div>
        <button onClick={toggleForm}>Add review</button>
      </div>
      <Reviews
        reviews={reviews}
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
