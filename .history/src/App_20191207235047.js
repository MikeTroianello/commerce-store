import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginSignup from './pages/login-signup/LoginSignup';

import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Homepage /> */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={LoginSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
