import React, { MouseEvent, FC } from 'react';

import './button.scss';

interface IButton {
  text: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>, ...rest: any[]) => void;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
  return (
    <button className='button-default' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
