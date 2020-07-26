import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookList = ({ title, filter }) => {
  const books = useSelector(state => state.books);
  const filteredBooks = filter ? books.filter(filter) : books;

  return (
    <div className="list">
      <h3>{title}</h3>
      <ul>
        {filteredBooks.map(book => (
          <li key={book._id} className="list-item">
            <div>
              <Link to={`/books/${book._id}`}>
                <strong>{book.name}</strong>
              </Link>
            </div>
            <div>Reviews: {book.reviews.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
