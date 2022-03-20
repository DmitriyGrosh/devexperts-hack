import React, { FC } from 'react';

interface IHeader {
  name: string;
  time: string;
}

const Header: FC<IHeader> = ({ name, time }) => {
  return (
    <div className='lightbox-header'>
      <p>{name}</p>
      <p>{time}</p>
    </div>
  );
};

export default Header;
