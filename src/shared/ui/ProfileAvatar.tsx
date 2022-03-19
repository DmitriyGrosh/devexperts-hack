import React from 'react';
import { Link } from 'react-router-dom';

import './styles/profileavatar.scss';

const ProfileAvatar = () => {
  return (
    <Link to='/profile'>
      <div className='profile__avatar'>
        <div className='profile__avatar-img' />
      </div>
    </Link>
  );
};

export default ProfileAvatar;
