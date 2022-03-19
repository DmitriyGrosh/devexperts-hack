import React, { FC } from 'react';
import Logo from '../Logo';

import info from '../../../assets/info.png';

import './style.scss';

const Background: FC = () => {
  return (
    <div className='background-image'>
      <img src={info} alt='backgroynd' />
      <div className='description-container'>
        <div className='description'>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Background;
