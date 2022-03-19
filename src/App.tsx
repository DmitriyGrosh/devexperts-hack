import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './router/index';
import AuthContainer from './features/auth.container';

import { store } from './redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContainer>
          <Router />
        </AuthContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
