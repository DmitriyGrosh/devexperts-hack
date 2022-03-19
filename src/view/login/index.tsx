import React, { ChangeEvent, useState, FC } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useAppDispatch } from '../../redux/hooks';

import { setLogin as setLoginAction } from '../../features/auth.container/model/auth.slice';

import Input from '../../shared/ui/input';
import Background from '../../shared/ui/background';

import './style.scss';

interface ICredentionals {
  access_token: string;
  refresh_token: string;
}

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: 'login' | 'password') => {
    if (type === 'login') {
      setLogin(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const setCredentionals = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const handleLogin = async () => {
    const data = {
      username: login,
      password,
    };

    await axios.post<ICredentionals>(`${process.env.REACT_APP_SERVER}auth/login`, data).then((res) => {
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
        <h1>Авторизация</h1>
        <div className='inputs'>
          <Input type='text' value={login} handleChange={(event) => handleChange(event, 'login')} placeholder='логин' />
          <Input
            type='password'
            value={password}
            handleChange={(event) => handleChange(event, 'password')}
            placeholder='пароль'
          />
        </div>
        <div className='buttons'>
          <button className="btn-login" onClick={handleLogin}>Войти</button>
          <button className="btn-loginggl" onClick={signIn}>Google Account</button>
        </div>
      </div>
      <div className='visual-container'>
        <Background />
      </div>
    </div>
  );
};

export default Login;
