import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/navlist.scss';

const NavList: FC = () => {
  return (
    <ul className='nav__list'>
      <li>
        <NavLink to='/home'><span className="head-word">Главная</span></NavLink>
      </li>
      <li>
        <NavLink to='/calendar'><span className="head-word">Календарь</span></NavLink>
      </li>
    </ul>
  );
};

export default NavList;
