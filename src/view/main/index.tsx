import React, { FC, useState } from 'react';
import Column from '../../features/main.table/Column';
import Row from '../../features/main.table/Row';
import Title, { Types } from '../../features/main.table/Title';

import './style.scss';

const Main: FC = () => {
  const [activeFolder, setActiveFolder] = useState<Types>('Мои акции');
  const changeFolderHandle = (folder: Types) => {
    setActiveFolder(folder);
  };
  return (
    <div className='container main'>
      <Title changeFolderHandle={changeFolderHandle} folder={activeFolder} />
      <div className='main-table'>
        <div className='main-table__columns'>
          <Column />
        </div>
        <div className='main-table__rows'>
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />

          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
          <Row rowItem={{ id: 1 }} />
        </div>
      </div>
    </div>
  );
};

export default Main;
