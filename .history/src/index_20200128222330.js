import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
     <PersistGate>
        
        <App />
      
      </PersistGate>
  document.getElementById('root')
);
