import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthContainer from './features/auth.container';
import Login from './view/login';

function App() {
  return (
    <div className='App'>
      <AuthContainer>
        <Login />
      </AuthContainer>
    </div>
  );
}

export default App;
