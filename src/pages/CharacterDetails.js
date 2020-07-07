import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/character';
import Page from '../components/Page';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (id) {
      API.getCharacter(id).then(char => setCharacter(char));
    }
  }, [id]);

  return character._id ? (
    <Page>
      <div>
        <strong>Name: </strong>
        {character.name}
      </div>
      <div>
        <strong>Height: </strong>
        {character.height}
      </div>
      <div>
        <strong>Race: </strong>
        {character.race}
      </div>
      <div>
        <strong>Gender: </strong>
        {character.gender}
      </div>
      <div>
        <strong>Birth: </strong>
        {character.birth}
      </div>
      <div>
        <strong>Spouse: </strong>
        {character.spouse}
      </div>
      <div>
        <strong>Death: </strong>
        {character.death}
      </div>
      <div>
        <strong>Realm: </strong>
        {character.realm ? character.realm.split(',').join(', ') : 'Not known'}
      </div>
      <div>
        <strong>Wiki URL: </strong>
        <a target="_blank" rel="noopener noreferrer" href={character.wikiUrl}>
          {character.wikiUrl}
        </a>
      </div>
    </Page>
  ) : (
    false
  );
};

export default CharacterDetails;
