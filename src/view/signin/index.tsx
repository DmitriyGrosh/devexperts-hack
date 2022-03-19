import React, { ChangeEvent, useState, FC } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useAppDispatch } from '../../redux/hooks';

import Input from '../../shared/ui/input';
import Background from '../../shared/ui/background';
import Button from '../../shared/ui/button/Button';

import { setLogin as setLoginAction } from '../../features/auth.container/model/auth.slice';

import './style.scss';

interface ICredentionals {
  access_token: string;
  refresh_token: string;
}

const Signin: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: 'login' | 'password') => {
    if (type === 'login') setLogin(event.target.value);
    if (type === 'password') setPassword(event.target.value);
  };

  const setCredentionals = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const handleSignin = () => {
    const data = {
      username: login,
      password,
    };

    axios.post<ICredentionals>(`${process.env.REACT_APP_SERVER}auth/register`, data).then((res) => {
      // eslint-disable-next-line camelcase
      const { access_token, refresh_token } = res.data;
      const decode: any = jwtDecode(access_token);

      setCredentionals(access_token, refresh_token);
      dispatch(setLoginAction({ name: decode.username, id: decode.id }));
      navigate('/calendar');
    });
  };

  const signIn = async () => {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    await auth2.signIn().then((googleUser: any) => {
      // eslint-disable-next-line camelcase
      const { id_token } = googleUser.getAuthResponse();
      axios
        // eslint-disable-next-line camelcase
        .post<ICredentionals>(`${process.env.REACT_APP_SERVER}auth/google/login`, { token: id_token })
        .then((data) => {
          // eslint-disable-next-line camelcase
          const { refresh_token, access_token } = data.data;

          const decode: any = jwtDecode(access_token);

          setCredentionals(access_token, refresh_token);
          dispatch(setLoginAction({ name: decode.username, id: decode.id }));
          navigate('/calendar');
        });
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
          <Button text='Зарегистрироваться' handleClick={handleSignin} />
          <Button text='войти через гугл' handleClick={signIn} />
        </div>
      </div>
      <div className='visual-container'>
        <Background />
      </div>
    </div>
  );
};

export default Signin;
