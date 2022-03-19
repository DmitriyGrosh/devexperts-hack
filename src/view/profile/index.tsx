import React, { FC } from 'react';
import Button from '../../shared/ui/button/Button';
import LabelInput from '../../shared/ui/labelinput';

import './style.scss';

const Profile: FC = () => {
  const uploadAvatar = () => {
    console.log('kek');
  };
  return (
    <div className='profile container'>
      <h1 className='profile-title'>Профиль</h1>
      <div className='profile-info'>
        <div className='profile-avatar'>
          <img src='./asset' alt='kek' />
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
