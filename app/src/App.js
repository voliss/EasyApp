import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import MainNavi from './components/MainNavi';
import Section from './components/Section';

function App() {
  return (
    <Fragment>
      <MainNavi />
      <main>
        <Section />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
