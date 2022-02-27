import React, { Fragment } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopKatalogOrder from './ShopKatalogOrder';
import ShopSvg from './ShopSvg';
import Image2 from './Image2';

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
