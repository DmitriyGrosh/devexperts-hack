import React, { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import './style.scss';

interface IChips {
  handleDelete: () => void;
}

const Chips: FC<IChips> = ({ children, handleDelete }) => {
  return (
    <div className='chips-default'>
      <span>{children}</span>
      <div className='delete-icon'>
        <ClearIcon onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Chips;
