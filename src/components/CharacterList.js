import React, { useState, useEffect } from 'react';
import * as CharacterAPI from '../api/character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CharacterAPI.getCharacters(0, 5)
      .then(pageData => {
        const { data, total, page, limit } = pageData;
        setCharacters(data);
        setTotal(total);
        setPage(page);
        setLimit(limit);
      })
      .finally(() => setLoading(false));
  }, []);

  const updatePageState = pageData => {
    const { data, total, page, limit } = pageData;
    setCharacters(data);
    setTotal(total);
    setPage(page);
    setLimit(limit);
    setLoading(false);
  };

  const handlePageChange = newPage => {
    const condition = page < newPage ? newPage < total / limit : newPage >= 0;

    if (condition) {
      setLoading(true);
      CharacterAPI.getCharacters(newPage, limit).then(updatePageState);
    }
  };

  const handleChangeLimit = newLimit => {
    setLimit(newLimit);
    setLoading(true);
    CharacterAPI.getCharacters(0, newLimit).then(updatePageState);
  };

  return (
    <div>
      <h3>Characters</h3>

      {loading ? (
        <div>Carregando dados no servidor...</div>
      ) : (
        <ul>
          {characters.map(c => (
            <li key={c._id}>{c.name}</li>
          ))}
        </ul>
      )}
      <div>
        <label>
          <b>Page: </b>
        </label>
        <label>{page + 1} </label>

        <label>
          <b>Page size: </b>
        </label>
        <label>{characters.length} </label>

        <label>
          <b>Total: </b>
        </label>
        <label>{total} </label>
      </div>
      <div>
        <span>
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        </span>
        <span>
          <select
            value={limit}
            name="Limit"
            onChange={e => handleChangeLimit(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </span>
        <span>
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </span>
      </div>
    </div>
  );
};

export default CharacterList;
