import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../features/header/ui/index';
import Calendar from '../view/calendar';
import Profile from '../view/profile';
import Signin from '../view/signin';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Signin />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
};

export default Router;
