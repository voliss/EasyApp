import React from 'react';
import BurgerLabels from './BurgerLabels';

import classes from './ShopKatalogOrder.module.css';

const ShopKatalogOrder = () => {
  return (
    <section className={classes.menuOrders}>
      <h3>Objednej si:</h3>
      <BurgerLabels />
    </section>
  );
};

export default ShopKatalogOrder;
