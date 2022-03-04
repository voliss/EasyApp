import React from 'react';

import classes from '../MainNavi/TopSvg.module.css';

const ShopSvg = () => {
  return (
    <svg
      className={classes.svgecko}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path
        fill='#ffd700'
        fillOpacity='1'
        d='M0,192L1440,32L1440,0L0,0Z'
      ></path>
    </svg>
  );
};

export default ShopSvg;
