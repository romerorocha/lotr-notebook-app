import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [author, setAuthor] = useState('');
  const [stars, setStars] = useState(1);
  const [text, setText] = useState('');

  const handleChangeStars = e => {
    const value = e.target.value;
    if (value > 0 && value < 6) {
      setStars(value);
    }
  };

  const submitReview = e => {
    e.preventDefault();
    addReview({ author, stars, text }).then(() => {
      setAuthor('');
      setText('');
      setStars(1);
    });
  };

  return (
    <div className="review-form">
      <hr />
      <form onSubmit={submitReview}>
        <div>
          <label htmlFor="name">Author</label>
          <input
            id="name"
            type="text"
            required
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stars">Stars</label>
          <input
            id="stars"
            type="number"
            required
            value={stars}
            onChange={handleChangeStars}
          />
        </div>
        <div>
          <label className="review-form-label" htmlFor="text">
            Text
          </label>
          <textarea
            id="text"
            rows={5}
            required
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
