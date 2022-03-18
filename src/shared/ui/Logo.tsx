import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles/logo.scss';

type Props = {};

const Logo: FC = () => {
  return (
    <Link to='/home'>
      <div className='logo'>EXCalendar</div>
    </Link>
  );
};

export default Logo;
