import React from 'react';

import classes from './ShopKatalogContent.module.css';

const ShopKatalogContent = () => {
  return (
    <section className={classes.basics}>
      <div className={classes.textOne}>
        <h3>Nikam se ti nechce?</h3>
        <p>
          Máš po práci? Máš po škole? Chceš koukat s přítelkyní na Netflix? Jsi
          jen lenoch líná? Nebo zrovna nemáš čas? Ať je to, jak chce je tu
          řešení!
        </p>
      </div>
      <div className={classes.textTwo}>
        <h3>Vyber si burger a my ti ho přivezeme</h3>
        <p>
          Vyber si z naší klasické nabídky, kterou máme i na centrále. Naše
          burgrová skvadra se o zbytek už postará a doveze ti luxusního hambáče!
          Ručíme za to, že bude teplej a v nejvyšší kvalitě.
        </p>
      </div>
    </section>
  );
};

export default ShopKatalogContent;
