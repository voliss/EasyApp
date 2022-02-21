import React from 'react';

import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logoSet}>
      <img
        src='http://127.0.0.1:8887/Logo Burgers.png'
        alt='logo Voli Burgers'
      />
    </div>
  );
};

export default Logo;
