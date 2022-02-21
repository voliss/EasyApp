import React from 'react';

import classes from './TopSvg.module.css';

const TopSvg = () => {
  return (
    <svg
      className={classes.svgecko}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path
        fill='#ffd700'
        fillOpacity='1'
        d='M0,224L60,192C120,160,240,96,360,90.7C480,85,600,139,720,144C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
      ></path>
    </svg>
  );
};

export default TopSvg;
