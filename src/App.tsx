import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router/index';
import Login from './view/login';
import Signin from './view/signin';
import AuthContainer from './features/auth.container';
import Notification from './shared/ui/notification/Notification';

import success from './assets/success.svg';
import './App.css';
import Button from './shared/ui/button/Button';

function App() {
  return (
    <BrowserRouter>
      <AuthContainer>
        <Router />
        <Notification
          type='error'
          text='мы украдем ваши бананы а еще вашу жену? отчима и никчемную жизнь'
          active
          image={<img className='notification__img' src={success} alt='' />}
        />
        <Signin />
      </AuthContainer>
    </BrowserRouter>
  );
}

export default App;
