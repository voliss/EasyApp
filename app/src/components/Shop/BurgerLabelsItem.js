import React, { useRef } from 'react';

import classes from './ShopKatalogOrder.module.css';

const BurgerLabelsItem = (props) => {
  const value = useRef();

  const pridejHandler = (e) => {
    e.preventDefault();

    if (value.current.value > 9) {
      return;
    }

    value.current.value++;
  };

  const odeberHandler = (e) => {
    e.preventDefault();

    if (value.current.value <= 0) {
      return;
    }

    value.current.value--;
  };

  return (
    <div className={classes.item}>
      <label htmlFor={props.id}>{props.nazev}</label>
      <div className={classes.btns}>
        <button onClick={pridejHandler}>+</button>
        <button onClick={odeberHandler}>-</button>
      </div>
      <input
        ref={value}
        type='number'
        name={props.id}
        id={props.id}
        min='1'
        max='10'
      />
    </div>
  );
};

export default BurgerLabelsItem;
