import React from 'react';

import classes from './MenuKatalog.module.css';

const MenuKatalog = () => {
  return (
    <section className={classes.katalog}>
      <div>
        <h3>Lipa Burger</h3>
        <div>
          <span className={classes.info}>
            Domaci bulka, 180g BIO hovezi, cheddar, BBQ omacka, salat, kys.
            okurky
          </span>
          <span className={classes.price}>169 CZK</span>
        </div>
      </div>

      <div>
        <h3>Divocak</h3>
        <div>
          <span className={classes.info}>
            Domaci bulka, trhane BIO veprove, roztekly cheddar, sweetchilli
            omacka
          </span>
          <span className={classes.price}>169 CZK</span>
        </div>
      </div>

      <div>
        <h3>Mejdej</h3>
        <div>
          <span className={classes.info}>
            Domaci bulka, 2x 140g BIO hovezi, cheddar, roztekly cheddar, salat,
            Voli omacka, zampiony, cervena cibule
          </span>
          <span className={classes.price}>209 CZK</span>
        </div>
      </div>

      <div>
        <h3>Lejdy Burger</h3>
        <div>
          <span className={classes.info}>
            Domaci bulka, 140g BIO hovezi, eidam, salat, kecup, majoneza,
            rajcata, smazene cibulove krouzky
          </span>
          <span className={classes.price}>149 CZK</span>
        </div>
      </div>
    </section>
  );
};

export default MenuKatalog;
