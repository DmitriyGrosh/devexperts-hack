import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Logo from '../../../shared/ui/Logo';
import NavList from '../../../shared/ui/NavList';
import ProfileAvatar from '../../../shared/ui/ProfileAvatar';

type Props = {};

const Header: FC = (props: Props) => {
  return (
    <header className='header'>
      <div className='header-container container'>
        <Logo />
        <nav className='header-nav'>
          <NavList />
        </nav>
        <div className='header-profile'>
          <ProfileAvatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
