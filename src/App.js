import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Homepage from './pages/homepage/homepage.componet'
import ShopPage from './pages/shop/shop.componet.jsx'
import Header from './components/header/header.componet';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path= '/' component={Homepage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

