/* eslint-disable react/display-name */
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import MainTable from '../../features/main.table/MainTable';
import { setUserStockThunk } from '../../features/main.table/model/stock.thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Search from '../../features/searcher/ui/search';

import Title, { Types } from '../../shared/ui/table.title/Title';

import './style.scss';
import { filterStockNames, filterUserStocks } from '../../features/tools/model/stock.slice';

const Main: FC = () => {
  const [activeFolder, setActiveFolder] = useState<Types>('Портфель');
  const [searchValue, setSearchValue] = useState<string>('');
  const changeFolderHandle = (folder: Types) => {
    setActiveFolder(folder);
  };
  const { stocksNames, userStocks } = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserStockThunk());
  }, []);
  const filterStocks = (e: ChangeEvent<HTMLInputElement>) => {
    const searchVal: string = e.target.value;
    setSearchValue(searchVal);
    if (activeFolder === 'Портфель') {
      dispatch(filterUserStocks(searchValue));
    } else {
      dispatch(filterStockNames(searchValue));
    }
  };
  return (
    <div className='container main'>
      <Search searchValue={searchValue} filterStocks={filterStocks} />
      <Title changeFolderHandle={changeFolderHandle} folder={activeFolder} />
      <MainTable stockArray={activeFolder === 'Портфель' ? userStocks : stocksNames} folder={activeFolder} />
    </div>
  );
};

export default Main;
