import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Button from '../../shared/ui/button/Button';
import LabelInput, { ILabelInput } from '../../shared/ui/labelinput';

import './style.scss';
import jwtDecode from 'jwt-decode';

interface IUser {
  avatar: string;
  fio: string;
  mail: string;
  password: string;
  confirmPass: string;
}

const Profile: FC = () => {
  const [user, setUser] = useState<IUser>({
    avatar: '',
    fio: '',
    mail: '',
    password: '',
    confirmPass: '',
  });
  const uploadAvatar = () => {
    console.log('kek');
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decode: any = jwtDecode(token);

      if (decode.image) {
        setUser({ ...user, avatar: decode.image });
      }
    }
  }, [user?.avatar]);

  return (
    <div className='profile container'>
      <h1 className='profile-title'>Профиль</h1>
      <div className='profile-info'>
        <div className='profile-avatar'>
          {user?.avatar ? <img src={user?.avatar} alt='kek' /> : <AccountCircleIcon />}
          <Button handleClick={() => {}}>
            <span>Загрузить аватар</span>
          </Button>
        </div>
        <div className='profile-form'>
          <LabelInput
            value={user.fio}
            type='text'
            handleChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, fio: e.target.value })}
            label='ФИО'
          />
          <LabelInput
            value={user?.mail}
            type='email'
            handleChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, mail: e.target.value })}
            label='Почта'
          />
          <div className='profile-form__password'>
            <LabelInput
              value={user?.password}
              type='password'
              handleChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.target.value })}
              label='Пароль'
            />
            <LabelInput
              value={user?.confirmPass}
              type='password'
              handleChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, confirmPass: e.target.value })}
              label='Еще раз'
            />
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
