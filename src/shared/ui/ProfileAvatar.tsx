import React from 'react';
import { Link } from 'react-router-dom';
import './styles/profileavatar.scss';

type Props = {};

const ProfileAvatar = (props: Props) => {
  return (
    <Link to='/profile'>
      <div className='profile__avatar'>
        <div className='profile__avatar-img'>kek</div>
      </div>
    </Link>
  );
};

export default ProfileAvatar;
