import React from 'react';

const Action = ({ icon, action, show }) => {
  return (
    show && (
      <button onClick={action}>
        <i className={`fa ${icon}`}></i>
      </button>
    )
  );
};

export default Action;
