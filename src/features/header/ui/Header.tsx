import React, { FC } from 'react';

import Logo from '../../../shared/ui/Logo';
import NavList from '../../../shared/ui/NavList';
import ProfileAvatar from '../../../shared/ui/ProfileAvatar';

import './header.scss';

const Header: FC = () => {
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
