import React, { Fragment } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopKatalogOrder from './ShopKatalogOrder';
import ShopSvg from './MainNavi/ShopSvg';
import Image2 from './Images/Image2';

const ShopKatalog = () => {
  return (
    <Fragment>
      <ShopSvg />
      <ShopKatalogContent />
      <Image2 />
      <ShopKatalogOrder />
    </Fragment>
  );
};

export default ShopKatalog;
