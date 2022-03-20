import React, { FC, useEffect, useState } from 'react';
import { SchedulerStatic } from 'dhtmlx-scheduler';
import jwtDecode from 'jwt-decode';
import { useAppDispatch } from '../../redux/hooks';

import { setLogin } from './model/auth.slice';

declare global {
  interface Window {
    gapi: any;
    scheduler: SchedulerStatic;
  }
}

const AuthContainer: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState<boolean>(true);
  const _onInit = (auth2: any) => {
    console.log('init OK', auth2);
  };

  const _onError = (err: any) => {
    console.log('error', err);
  };
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    if (token) {
      const decode: any = jwtDecode(token);
      dispatch(setLogin(decode.username));
      setIsPending(false);
    } else {
      setTimeout(() => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2
            .init({
              client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
            .then(_onInit, _onError);
        });
      }, 100);
      setIsPending(false);
    }
  }, []);

  if (isPending) {
    return <>Loading...</>;
  }

  return <div className='auth-container'>{children}</div>;
};

export default AuthContainer;
