import React, { Fragment } from 'react';

import { burgery } from '../Menu/MenuKatalog';
import BurgerLabelsItem from './BurgerLabelsItem';

const BurgerLabels = () => {
  const burgerOrderList = burgery.map((burger) => (
    <BurgerLabelsItem key={burger.id} nazev={burger.nazev} />
  ));

  return <Fragment>{burgerOrderList}</Fragment>;
};

export default BurgerLabels;
