import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie, voteMovie } from '../actions/movies';
import Action from './Action';

const SORT_BY = {
  NAME: { getSort: (a, b) => a.name.localeCompare(b.name) },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

const MovieList = ({ title, setMovies, filter }) => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);

  const movies = useSelector(state => state.movies);
  const subList = movies.filter(filter).sort(sortBy.getSort);

  const vote = (id, option) => dispatch(voteMovie({ id, option }));
  const addBookmark = id => dispatch(updateMovie({ id, bookmarked: true }));
  const addToWatched = id => dispatch(updateMovie({ id, watched: true }));
  const reset = id => {
    dispatch(updateMovie({ id, bookmarked: false, watched: false }));
  };

  return (
    <div className="list">
      <h3>
        <span>{title} </span>
        <button
          className="sort-button"
          onClick={() => setSortBy(SORT_BY.ACADEMY_AWARDS)}
        >
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button" onClick={() => setSortBy(SORT_BY.NAME)}>
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        {subList.map(movie => {
          const marked = movie.bookmarked || movie.watched;
          return (
            <li key={movie._id} className="list-item">
              <div>
                <div>{movie.name}</div>
                <div>
                  <span>{`Score: ${movie.score} `}</span>
                  <Action
                    show
                    icon="fa-thumbs-up"
                    action={() => vote(movie._id, 'up')}
                  />
                  <Action
                    show
                    icon="fa-thumbs-down"
                    action={() => vote(movie._id, 'down')}
                  />
                </div>
                <div>{`Academy Awards: ${movie.academyAwardWins}`}</div>
                <div>
                  <span>Actions: </span>
                  <Action
                    show={!marked}
                    action={() => addBookmark(movie._id)}
                    icon="fa-star"
                  />
                  <Action
                    show={!marked}
                    action={() => addToWatched(movie._id)}
                    icon="fa-check"
                  />
                  <Action
                    show={marked}
                    action={() => reset(movie._id)}
                    icon="fa-times"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
