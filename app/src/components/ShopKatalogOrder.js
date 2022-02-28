import React, { useRef } from 'react';

import classes from './ShopKatalogOrder.module.css';

const ShopKatalogOrder = () => {
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
    <section className={classes.menuOrders}>
      <h3>Objednej si:</h3>
      <div className={classes.item}>
        <label htmlFor='brgr-1'>Lípák</label>
        <div className={classes.btns}>
          <button onClick={pridejHandler}>+</button>
          <button onClick={odeberHandler}>-</button>
        </div>
        <input
          ref={value}
          type='number'
          name='brgr-1'
          id='brgr-1'
          min='1'
          max='10'
        />
      </div>

      <div className={classes.item}>
        <label htmlFor='brgr-2'>Divočák</label>
        <div className={classes.btns}>
          <button onClick={pridejHandler}>+</button>
          <button onClick={odeberHandler}>-</button>
        </div>
        <input
          ref={value}
          type='number'
          name='brgr-2'
          id='brgr-2'
          min='1'
          max='10'
        />
      </div>

      <div className={classes.item}>
        <label htmlFor='brgr-3'>Mejdej</label>
        <div className={classes.btns}>
          <button>+</button>
          <button>-</button>
        </div>
        <input type='number' name='brgr-3' id='brgr-3' min='1' max='10' />
      </div>

      <div className={classes.item}>
        <label htmlFor='brgr-4'>Lejdy</label>
        <div className={classes.btns}>
          <button>+</button>
          <button>-</button>
        </div>
        <input type='number' name='brgr-4' id='brgr-4' min='1' max='10' />
      </div>
    </section>
  );
};

export default ShopKatalogOrder;
