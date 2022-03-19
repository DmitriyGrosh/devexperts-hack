import React, { ChangeEvent, FC } from 'react';

import './style.scss';

export type Types = 'text' | 'number' | 'email' | 'password';

interface IInput {
  type: Types;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, ...rest: any[]) => void;
  placeholder?: string;
}

const Input: FC<IInput> = ({ type, value, handleChange, placeholder }) => {
  return (
    <input placeholder={placeholder} className='input-default' type={type} value={value} onChange={handleChange} />
  );
};

export default Input;
