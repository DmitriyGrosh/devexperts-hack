import React, { FC } from 'react';

import './title.scss';

export type Types = 'Все акции' | 'Мои акции';

interface ITitle {
  folder: Types;
  changeFolderHandle: (event: Types, ...rest: any[]) => void;
}

const Title: FC<ITitle> = ({ folder, changeFolderHandle }) => {
  return (
    <div className='main-title'>
      <div className='main__switch-folder'>
        <button className={`${folder === 'Мои акции' ? 'active' : ''}`} onClick={() => changeFolderHandle('Мои акции')}>
          Мои акции
        </button>
        <button className={`${folder === 'Все акции' ? 'active' : ''}`} onClick={() => changeFolderHandle('Все акции')}>
          Все акции
        </button>
      </div>
      <h1 className='main__folder-title'>{folder}</h1>
    </div>
  );
};

export default Title;
