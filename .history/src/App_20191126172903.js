import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

function App() {
  console.log(React);
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
