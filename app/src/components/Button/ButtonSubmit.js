import React from 'react';

import classes from './ButtonSubmit.module.css';

const ButtonSubmit = (props) => {
  return (
    <div className={classes.btnPos}>
      <button className={classes.buttonDesign}>{props.children}</button>
    </div>
  );
};

export default ButtonSubmit;
