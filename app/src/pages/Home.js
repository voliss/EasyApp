import React, { Fragment } from 'react';

import MainNavi from '../components/MainNavi';
import Images from '../components/Images';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Fragment>
      <MainNavi />
      <Images />
      <Section />
      <Footer />
    </Fragment>
  );
};

export default Home;
