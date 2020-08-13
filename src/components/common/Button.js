import React from 'react';
import Button from '@material-ui/core/Button';

const Primary = ({ children }) => {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  );
};

const Secondary = ({ children }) => {
  return (
    <Button variant="outlined" color="primary">
      {children}
    </Button>
  );
};

export default { Primary, Secondary };
