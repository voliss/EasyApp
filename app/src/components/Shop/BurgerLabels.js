import React, { Fragment } from 'react';

import { burgery } from '../Menu/MenuKatalog';
import BurgerLabelsItem from './BurgerLabelsItem';

const BurgerLabels = () => {
  return (
    <Fragment>
      {burgery.map((burger) => (
        <BurgerLabelsItem key={burger.id} nazev={burger.nazev} />
      ))}
    </Fragment>
  );
};

export default BurgerLabels;
