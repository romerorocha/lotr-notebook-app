import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
import * as API from '../api/character';
import Page from '../components/Page';

const CharacterSearch = () => {
  const [result, setResult] = useState([]);

  const handleSearch = event => {
    const name = event.target.value;

    if (!name) {
      setResult([]);
      return;
    }

    API.searchByName(name).then(data => {
      const resultList = data.length > 20 ? data.slice(0, 20) : data;
      setResult(resultList);
    });
  };

  return (
    <Page>
      <div>
        <label>Character Name:</label>
        <Debounce time="400" handler="onChange">
          <input className="char-search-input" onChange={handleSearch} />
        </Debounce>
      </div>
      <div>
        <ul>
          {result.map(char => (
            <li key={char._id}>
              <Link to={`/character/${char._id}`}>
                <span>{char.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default CharacterSearch;
