import React, { FC, useState, useEffect } from 'react';
import Column from '../../features/main.table/Column';
import Row from '../../features/main.table/Row';
import Title, { Types } from '../../features/main.table/Title';
import Search from '../../features/searcher/ui/search';

import './style.scss';
import axios from 'axios';

const Main: FC = () => {
  const [activeFolder, setActiveFolder] = useState<Types>('Портфель');
  const changeFolderHandle = (folder: Types) => {
    setActiveFolder(folder);
  };

  useEffect(() => {
    // axios
    //   .get(
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     `${process.env.REACT_APP_SERVER}yahoo-finance/tickers/info/AAPL%2CMSFT%2CGOOG%2CAMZN%2CTSLA%2CNVDA%2CFB%2CTSM%2CUNH%2CJNJ%2CV%2CWMT%2CBAC%2CPG%2CHD%2CMA%2CXOM%2CCVX%2CPFE%2CBABA`,
    //   )
    //   .then((data) => console.log('==========>data', JSON.stringify(data)));
  }, []);

  // http://www.astra-dev.site:3000/yahoo-finance/tickers/info/AAPL
  // http://www.astra-dev.site:3000/yahoo-finance/tickers/info/AAPL
  return (
    <div className='container main'>
      <Search />
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
