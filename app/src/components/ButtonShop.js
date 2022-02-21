import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.btnPos}>
      <button>
        <Link to='/shop'>{props.children}</Link>
      </button>
    </div>
  );
};

export default Button;
