import React from 'react';

import classes from './OrderItem.module.css';

const OrderItem = () => {
  return (
    <li>
      <h2>Objednávka</h2>
      <div className={classes.item}>
        <div className={classes.itemInfo}>
          <span>Lípák</span>
          <span>169 CZK</span>
          <span>1 x</span>
          <div className={classes.btns}>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.itemPrice}>
        <span>Celkem:</span>
        <span>169 CZK</span>
      </div>
    </li>
  );
};

export default OrderItem;
