import React from 'react';

import classes from '../MainNavi/TopSvg.module.css';

const MenuSvg = () => {
  return (
    <svg
      className={classes.svgecko}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path
        fill='#ffd700'
        fillOpacity='1'
        d='M0,192L48,176C96,160,192,128,288,101.3C384,75,480,53,576,53.3C672,53,768,75,864,74.7C960,75,1056,53,1152,74.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
      ></path>
    </svg>
  );
};

export default MenuSvg;
