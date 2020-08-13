import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Primary = ({ children }) => {
  return (
    <MuiButton variant="contained" color="primary">
      {children}
    </MuiButton>
  );
};

const Secondary = ({ children }) => {
  return (
    <MuiButton variant="outlined" color="primary">
      {children}
    </MuiButton>
  );
};

export default { Primary, Secondary };
