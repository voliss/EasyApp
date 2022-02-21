import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import MainNavi from './components/MainNavi';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <Fragment>
      <MainNavi />
      <main>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/shop'></Route>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
