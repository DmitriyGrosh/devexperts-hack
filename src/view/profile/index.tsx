import React, { FC, useState, useEffect } from 'react';
import Button from '../../shared/ui/button/Button';
import LabelInput from '../../shared/ui/labelinput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './style.scss';
import jwtDecode from 'jwt-decode';

const Profile: FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const uploadAvatar = () => {
    console.log('kek');
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decode: any = jwtDecode(token);

      if (decode.image) {
        setAvatar(decode.image);
      }
    }
  }, []);

  return (
    <div className='profile container'>
      <h1 className='profile-title'>Профиль</h1>
      <div className='profile-info'>
        <div className='profile-avatar'>
          {avatar ? <img src={avatar} alt='kek' /> : <AccountCircleIcon />}
          <Button handleClick={uploadAvatar}>
            <span>Загрузить аватар</span>
          </Button>
        </div>
        <div className='profile-form'>
          <LabelInput value='' type='text' handleChange={uploadAvatar} label='ФИО' />
          <LabelInput value='' type='email' handleChange={uploadAvatar} label='Почта' />
          <div className='profile-form__password'>
            <LabelInput value='' type='password' handleChange={uploadAvatar} label='Пароль' />
            <LabelInput value='' type='password' handleChange={uploadAvatar} label='Еще раз' />
          </div>
          <Button handleClick={uploadAvatar}>
            <span>Сохранить изменения</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
