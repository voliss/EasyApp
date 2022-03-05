import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const ButtonOrder = (props) => {
  return (
    <div className={classes.btnPos}>
      <button className={classes.buttonDesign}>
        <Link to='/menu'>{props.children}</Link>
      </button>
    </div>
  );
};

export default ButtonOrder;
