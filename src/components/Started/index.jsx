import React from 'react';
import classes from './style.module.scss';

const Started = ({ openInvitation }) => {
  return (
    <div className={classes.container}>
      <h1>Started Page</h1>
      <button onClick={openInvitation}>Buka Undangan</button>
    </div>
  );
}

export default Started;
