import React from 'react';

const BookList = ({ title, books }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      <ul>
        {books.map(book => (
          <li key={book._id} className="list-item">
            <div>
              <strong>{book.name}</strong>
            </div>
            <div>Reviews: {book.reviews.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
