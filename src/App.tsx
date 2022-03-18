import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/index';
import Login from './view/login';
import Signin from './view/signin';
import AuthContainer from './features/auth.container';

function App() {
  return (
    <BrowserRouter>
      <AuthContainer>
        <Router />
        <Signin />
      </AuthContainer>
    </BrowserRouter>
  );
}

export default App;
