import React, { FC } from 'react';

import info from '../../../assets/info.png';

import './style.scss';

const Background: FC = () => {
  return (
    <div className='background-image'>
      <img src={info} alt='backgroynd' />
      <div className='description-container'>
        <div className='description'>
          <p>здесь будет лого</p>
          <p>pltcm ,eltn ntrcn gjl kjuj</p>
        </div>
      </div>
    </div>
  );
};

export default Background;
