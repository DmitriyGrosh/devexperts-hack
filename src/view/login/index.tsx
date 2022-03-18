import React, { ChangeEvent, useState, FC } from 'react';

import Input from '../../shared/ui/input';
import Background from '../../shared/ui/background';

import './style.scss';

const Login: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: 'login' | 'password') => {
    if (type === 'login') setLogin(event.target.value);
    if (type === 'password') setPassword(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      login,
      password,
    };

    console.log('==========>data', data);
  };

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: any) => {
      const profile = googleUser.getBasicProfile();

      // токен
      // eslint-disable-next-line camelcase
      const { id_token } = googleUser.getAuthResponse();
      // eslint-disable-next-line camelcase
      console.log(`ID Token: ${id_token}`);
    });
  };
  return (
    <div className='auth'>
      <div className='inputs-container'>
        <h1>Авторизация</h1>
        <div className='inputs'>
          <Input
            type='text'
            value={password}
            handleChange={(event) => handleChange(event, 'password')}
            placeholder='пароль'
          />
          <Input type='text' value={login} handleChange={(event) => handleChange(event, 'login')} placeholder='поиск' />
        </div>
        <div className='buttons'>
          <button onClick={handleLogin}>войти</button>
          <button onClick={signIn}>войти через гугл</button>
        </div>
      </div>
      <div className='visual-container'>
        <Background />
      </div>
    </div>
  );
};

export default Login;
