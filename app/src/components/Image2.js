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
              'https://tasteandflavors.com/wp-content/uploads/2018/11/taste-and-flavors-out-and-about-10-best-burgers-wide.jpg'
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
                'http://127.0.0.1:8887/brgrs.png'
              )`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Image2;
