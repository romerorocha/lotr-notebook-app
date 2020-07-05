import React, { useState } from 'react';

const ReviewList = ({
  reviews,
  showForm,
  toggleForm,
  handleAdd,
  handleUpdate,
  handleDelete,
}) => {
  const [_id, setId] = useState('');
  const [author, setAuthor] = useState('');
  const [stars, setStars] = useState(1);
  const [text, setText] = useState('');

  const handleChangeStars = e => {
    const value = e.target.value;
    if (value > 0 && value < 6) {
      setStars(parseInt(value));
    }
  };

  const enableEdition = review => {
    const { _id, author, stars, text } = review;
    setId(_id);
    setAuthor(author);
    setStars(stars);
    setText(text);
    toggleForm();
  };

  const submitReview = e => {
    e.preventDefault();

    const submit = _id ? handleUpdate : handleAdd;
    submit({ _id, author, stars, text }).then(() => {
      setId('');
      setAuthor('');
      setText('');
      setStars(1);
      toggleForm();
    });
  };

  return (
    <div>
      {showForm && (
        <div className="review-form">
          <hr />
          <h4>Add/Edit Review</h4>
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
      )}
      {reviews && (
        <div className="review-list">
          {reviews.map(review => (
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
              <div>
                <button onClick={() => enableEdition(review)}>Edit</button>
                <button onClick={() => handleDelete(review._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
