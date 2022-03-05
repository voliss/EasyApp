import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const ButtonOrder = (props) => {
  return (
    <div className={classes.btnPos}>
      <button onClick={props.onClick} className={classes.buttonDesign}>
        <Link to='/shop'>{props.children}</Link>
      </button>
    </div>
  );
};

export default ButtonOrder;
