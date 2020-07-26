import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovies } from '../actions/movies';
import * as API from '../api/movies';
import Action from './Action';

const SORT_BY = {
  NAME: { getSort: (a, b) => a.name.localeCompare(b.name) },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

const MovieList = ({ title, setMovies, filter }) => {
  const dispatch = useDispatch();

  // Component state
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);

  // Redux integration
  const movies = useSelector(state => state.movies);

  // Computed list
  const subList = movies.filter(filter).sort(sortBy.getSort);

  // Handle component actions
  const update = (id, newProps) => {
    API.update(id, newProps).then(movie => dispatch(updateMovies(movie)));
  };

  const setBookmarked = id => update(id, { bookmarked: true });
  const setWatched = id => update(id, { watched: true });
  const resetMovie = id => update(id, { watched: false, bookmarked: false });
  const vote = (id, option) =>
    API.vote(id, option).then(movie => dispatch(updateMovies(movie)));

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
                    action={() => setBookmarked(movie._id)}
                    icon="fa-star"
                  />
                  <Action
                    show={!marked}
                    action={() => setWatched(movie._id)}
                    icon="fa-check"
                  />
                  <Action
                    show={marked}
                    action={() => resetMovie(movie._id)}
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
