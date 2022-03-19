import React, { FC, ChangeEvent } from 'react';

import Input from '../input';
import { Types } from '../input/index';

import './style.scss';

interface ILabelInput {
  label: string;
  type: Types;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, ...rest: any[]) => void;
}

const LabelInput: FC<ILabelInput> = ({ label, value, type, handleChange }) => {
  return (
    <div className='label-input'>
      <label className='label'>{label}</label>
      <Input type={type} handleChange={handleChange} value={value} />
    </div>
  );
};

export default LabelInput;
