import React from 'react';

const Movie = ({ movie, onUpdate, onReset, onVote }) => {
  const marked = movie.bookmarked || movie.watched;

  return (
    <div>
      <div>{movie.name}</div>
      <div>
        <span>{`Score: ${movie.score}`}</span>
        <span>
          <button onClick={() => onVote(movie._id, 'up')}>
            <i className="fa fa-thumbs-up"></i>
          </button>
        </span>
        <span>
          <button onClick={() => onVote(movie._id, 'down')}>
            <i className="fa fa-thumbs-down"></i>
          </button>
        </span>
      </div>
      <div>{`Academy Awards: ${movie.academyAwardWins}`}</div>
      <div>
        <span>Actions:</span>
        {!marked && (
          <span>
            <button onClick={() => onUpdate(movie._id, 'bookmarked')}>
              <i className="fa fa-star"></i>
            </button>
          </span>
        )}
        {!marked && (
          <span>
            <button onClick={() => onUpdate(movie._id, 'watched')}>
              <i className="fa fa-check"></i>
            </button>
          </span>
        )}
        {marked && (
          <span>
            <button onClick={() => onReset(movie._id)}>
              <i className="fa fa-times"></i>
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Movie;
