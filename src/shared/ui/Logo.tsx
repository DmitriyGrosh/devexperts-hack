import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles/logo.scss';

const Logo: FC = () => {
  return (
    <Link to='/home'>
      <div className='logo'>EXCalendar</div>
    </Link>
  );
};

export default Logo;
