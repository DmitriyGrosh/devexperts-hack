import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './styles/profileavatar.scss';

const ProfileAvatar = () => {
  return (
    <Link to='/profile'>
      <div className='profile__avatar'>
        <AccountCircleIcon className='profile__avatar-img' />
      </div>
    </Link>
  );
};

export default ProfileAvatar;
