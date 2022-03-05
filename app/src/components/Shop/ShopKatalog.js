import React, { Fragment } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopKatalogOrder from './ShopKatalogOrder';
import ShopSvg from './ShopSvg';
import Image2 from '../Images/Image2';
import ButtonOrder from '../Button/ButtonOrder';

const ShopKatalog = () => {
  return (
    <Fragment>
      <ShopSvg />
      <ShopKatalogContent />
      <Image2 />
      <ShopKatalogOrder />
      <ButtonOrder>Potvrdit</ButtonOrder>
    </Fragment>
  );
};

export default ShopKatalog;
