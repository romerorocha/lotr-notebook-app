import React from 'react';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const Stars = ({ number }) => {
  const stars = [];
  for (let i = 0; i < number; i++) {
    stars.push(<Star key={i} />);
  }

  while (stars.length < 5) {
    stars.push(<StarBorder />);
  }
  return stars;
};

export default Stars;
