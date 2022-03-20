import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import AutocompleteStocks from '../../shared/ui/autocompleteStocks';

import './style.scss';
import { setStockThunk } from './model/stock.thunk';
import { deleteStock, setActiveStock } from './model/stock.slice';
import Chips from '../../shared/ui/chips';
import { UserStock } from '../../shared/ui/row/Row';

const options = [
  {
    name: 'data 1',
    data: false,
  },
  {
    name: 'data 2',
    data: false,
  },
  {
    name: 'data 3',
    data: false,
  },
  {
    name: 'data 4',
    data: false,
  },
];

const Tools: FC = () => {
  const { stocksNames, activeStocks } = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();

  const handleSetSearch = (event: UserStock) => {
    dispatch(setActiveStock(event));
  };

  const handleDelete = (stock: UserStock) => {
    dispatch(deleteStock(stock));
  };

  useEffect(() => {
    dispatch(setStockThunk());
  }, []);

  console.log('==========>stocks', stocksNames);
  return (
    <div className='tools'>
      <AutocompleteStocks stocks={stocksNames} handleSetSearch={handleSetSearch} />
      <div className='chips-container'>
        {activeStocks.map((stock) => (
          <Chips handleDelete={() => handleDelete(stock)}>{stock.symbol}</Chips>
        ))}
      </div>
    </div>
  );
};

export default Tools;
