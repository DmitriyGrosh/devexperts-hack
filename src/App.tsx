import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router/index';
import AuthContainer from './features/auth.container';
import Notification from './shared/ui/notification/Notification';

import success from './assets/success.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthContainer>
        <Router />
        <Notification type='error' active>
          <img className='notification__img' src={success} alt='' />
          <p>мы украдем ваши бананы а еще вашу жену? отчима и никчемную жизнь</p>
        </Notification>
      </AuthContainer>
    </BrowserRouter>
  );
}

export default App;
