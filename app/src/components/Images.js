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
                  'https://i.iheart.com/v3/re/new_assets/6131025f0d27106d8502b375'
                )`,
              }}
            ></div>
          </div>

          <div className={classes['two-images-outer']}>
            <div
              className={classes['two-images-inner']}
              style={{
                backgroundImage: `url(
                  'https://media.istockphoto.com/photos/cheeseburger-and-fries-on-restaurant-table-picture-id507636912?k=20&m=507636912&s=612x612&w=0&h=itDYARz5VdC8sUcaGg08MDovUljW1o3217sGEIpi6b4='
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
