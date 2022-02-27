import React from 'react';

import classes from './Image2.module.css';

const Image2 = () => {
  return (
    <div className={classes['tw-images']}>
      <div className={classes['featured-image-outer']}>
        <div
          className={classes['featured-image-inner']}
          style={{
            backgroundImage: `url(
              'http://127.0.0.1:8887/brgrs-neon-1.png'
            )`,
          }}
        ></div>
      </div>
      <div className={classes['sec-images']}>
        <div className={classes['sec-images-outer']}>
          <div
            className={classes['sec-images-inner']}
            style={{
              backgroundImage: `url(
                'http://127.0.0.1:8887/brgrs-neon-2.png'
              )`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Image2;
