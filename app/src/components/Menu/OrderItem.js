import React from 'react';

import classes from './MenuKatalog.module.css';

const OrderItem = (props) => {
  return (
    <section className={classes.katalog}>
      <ul>
        <li>
          <h3>{props.nazev}</h3>
          <span className={classes.info}>{props.popis}</span>
          <br />
          <span className={classes.info}>({props.obsah})</span>
          <span className={classes.price}>{props.cena} CZK</span>
        </li>
      </ul>
    </section>
  );
};

export default OrderItem;
