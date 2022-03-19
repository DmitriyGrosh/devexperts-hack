import React, { ChangeEvent, useState, FC } from 'react';
import axios from 'axios';

import Input from '../../shared/ui/input';
import Background from '../../shared/ui/background';

import './style.scss';
import Button from '../../shared/ui/button/Button';

const Signin: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: 'login' | 'password') => {
    if (type === 'login') setLogin(event.target.value);
    if (type === 'password') setPassword(event.target.value);
  };

  const handleSignin = () => {
    const data = {
      username: login,
      password,
    };

    axios.post(`${process.env.REACT_APP_SERVER}auth/login`, data).then((res) => console.log('==========>data', res));
    console.log('==========>data', data);
  };

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: any) => {
      // eslint-disable-next-line camelcase
      const { id_token } = googleUser.getAuthResponse();
      axios
        // eslint-disable-next-line camelcase
        .post<{ token: string }>(`${process.env.REACT_APP_SERVER}auth/google/login`, { token: id_token })
        .then((data) => console.log('==========>data', data));
    });
  };
  return (
    <div className='auth'>
      <div className='inputs-container'>
        <h1>Регистрация</h1>
        <div className='inputs'>
          <Input type='text' value={login} handleChange={(event) => handleChange(event, 'login')} placeholder='поиск' />
          <Input
            type='text'
            value={password}
            handleChange={(event) => handleChange(event, 'password')}
            placeholder='пароль'
          />
        </div>
        <div className='buttons'>
          <Button handleClick={handleSignin}>
            <span>Зарегистрироваться</span>
          </Button>
          <Button handleClick={signIn}>
            <span>войти через гугл</span>
          </Button>
        </div>
      </div>
      <div className='visual-container'>
        <Background />
      </div>
    </div>
  );
};

export default Signin;
