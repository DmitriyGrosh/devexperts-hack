import React, { MouseEvent, FC } from 'react';

import './button.scss';

interface IButton {
  handleClick: (event: MouseEvent<HTMLButtonElement>, ...rest: any[]) => void;
}

const Button: FC<IButton> = ({ children, handleClick }) => {
  return (
    <button className='button-default' onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
