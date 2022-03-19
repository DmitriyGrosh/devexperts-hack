import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Header from '../features/header/ui';

import { useAppSelector } from '../redux/hooks';

const PrivateRoute = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  return isAuth ? (
    <div className='main-container'>
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default PrivateRoute;
