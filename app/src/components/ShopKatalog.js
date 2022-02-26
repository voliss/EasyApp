import React, { Fragment } from 'react';

import ShopKatalogContent from './ShopKatalogContent';
import ShopSvg from './ShopSvg';

const ShopKatalog = () => {
  return (
    <Fragment>
      <ShopSvg />
      <ShopKatalogContent />
    </Fragment>
  );
};

export default ShopKatalog;
