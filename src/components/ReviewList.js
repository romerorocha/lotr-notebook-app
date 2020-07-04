import React from 'react';

const ReviewList = ({ reviews }) => {
  return reviews
    ? reviews.map(review => (
        <div key={review._id}>
          <hr />
          <div>
            <span>
              <strong>Reviewer:</strong>
            </span>
            <span>{review.author}</span>
          </div>
          <div>
            <span>
              <strong>Stars:</strong>
            </span>
            <span>{review.stars}</span>
          </div>
          <div>
            <span>
              <strong>Text:</strong>
            </span>
            <span>{review.text}</span>
          </div>
        </div>
      ))
    : false;
};

export default ReviewList;
