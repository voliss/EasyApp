import React, { Fragment, useState } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopKatalogOrder from './ShopKatalogOrder';
import ShopSvg from './ShopSvg';
import Image2 from '../Images/Image2';
import ButtonOrder from '../Button/ButtonOrder';
import Modal from '../OrderForm/Modal';
import OrderModule from '../OrderForm/OrderModule';

const ShopKatalog = () => {
  const [tmavyPozadi, setTmavyPozadi] = useState(false);
  const [orderEnv, setOrderEnv] = useState(false);

  const pozadiHandler = () => {
    setTmavyPozadi(true);
    setOrderEnv(true);
  };

  const vypniPozadiHandler = () => {
    setTmavyPozadi(false);
    setOrderEnv(false);
  };

  return (
    <Fragment>
      <ShopSvg />
      <ShopKatalogContent />
      <Image2 />
      <ShopKatalogOrder />
      <ButtonOrder onClick={pozadiHandler}>Potvrdit</ButtonOrder>
      {tmavyPozadi && <Modal onClose={vypniPozadiHandler} />}
      {orderEnv && <OrderModule />}
    </Fragment>
  );
};

export default ShopKatalog;
