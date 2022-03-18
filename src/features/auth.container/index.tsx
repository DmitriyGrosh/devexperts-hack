import React, { FC, useEffect } from 'react';

declare global {
  interface Window {
    gapi: any;
  }
}

const AuthContainer: FC = ({ children }) => {
  useEffect(() => {
    const _onInit = (auth2: any) => {
      console.log('init OK', auth2);
    };

    const _onError = (err: any) => {
      console.log('error', err);
    };
    setTimeout(() => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          })
          .then(_onInit, _onError);
      });
    }, 0);
  }, []);

  return <div className='auth-container'>{children}</div>;
};

export default AuthContainer;
