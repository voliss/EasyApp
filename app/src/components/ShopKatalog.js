import React, { Fragment } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopKatalogOrder from './ShopKatalogOrder';
import ShopSvg from './ShopSvg';

const ShopKatalog = () => {
  return (
    <Fragment>
      <ShopSvg />
      <ShopKatalogContent />
      <ShopKatalogOrder />
    </Fragment>
  );
};

export default ShopKatalog;
