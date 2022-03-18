import React, { ChangeEvent, FC } from 'react';

import './style.scss';

type Types = 'text' | 'number';

interface IInput {
  type: Types;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, ...rest: any[]) => void;
}

const Input: FC<IInput> = ({ type, value, handleChange }) => {
  return <input className='input-default' type={type} value={value} onChange={handleChange} />;
};

export default Input;
