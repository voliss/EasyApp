import React from 'react';

import classes from './Image.module.css';

const Images = () => {
  return (
    <div className={classes['three-images-wrapper']}>
      <div className={classes['three-images']}>
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
        <div className={classes['two-images']}>
          <div className={classes['two-images-outer']}>
            <div
              className={classes['two-images-inner']}
              style={{
                backgroundImage: `url(
                  'http://127.0.0.1:8887/volibrgr.png'
                )`,
              }}
            ></div>
          </div>
          <div className={classes['two-images-outer']}>
            <div
              className={classes['two-images-inner']}
              style={{
                backgroundImage: `url(
                  'http://127.0.0.1:8887/brgrs.png'
                )`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
