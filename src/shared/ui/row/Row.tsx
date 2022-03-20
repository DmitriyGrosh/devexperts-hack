import moment from 'moment';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { addUserStockThunk, deleteUserStockThunk } from '../../../features/main.table/model/stock.thunk';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Types } from '../table.title/Title';

import './row.scss';

export type UserStock = {
  symbol: string;
  shortName: string;
  longName: string;
  currentPrice: number;
  dividends: any[];
};

interface IRow {
  rowItem: UserStock;
  folder: Types;
}

const Row: FC<IRow> = ({ rowItem, folder }) => {
  const { userStocks } = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  const deleteHandle = () => {
    const filteredUserStock = userStocks.filter((userStock: UserStock) => userStock.symbol !== rowItem.symbol);
    dispatch(deleteUserStockThunk(filteredUserStock));
  };
  const addHandle = () => {
    const stockInArray: UserStock | undefined = userStocks.find(
      (userStock: UserStock) => userStock.symbol !== rowItem.symbol,
    );
    if (!stockInArray) {
      const g = [...userStocks, rowItem];
      dispatch(addUserStockThunk(g));
    }
  };
  const lastDividend = rowItem.dividends ? rowItem.dividends[0] : null;
  const date = moment(lastDividend?.date).format('YYYY-MM-DD');
  const twoDays = 48 * 60 * 60 * 1000;
  const lastBuyDay = new Date(date);
  lastBuyDay.setTime(lastBuyDay.getTime() - twoDays);
  return (
    <div className='table-row'>
      <span className='table-row__name-item'>
        <Link to={`/stock/${rowItem.symbol}`}>{rowItem.shortName}</Link>
      </span>
      <span className='table-row__name-item'>{moment(lastBuyDay).format('YYYY-MM-DD')}</span>
      <span className='table-row__name-item'>{date}</span>
      <span className='table-row__name-item'>{lastDividend?.dividendPrice} $</span>
      <span className='table-row__name-item'>{rowItem.currentPrice} $</span>
      <span className='table-row__name-item'>Цена акции на закрытие</span>
      <span className='table-row__name-item'>Дивидендная доходность</span>
      {folder === 'Портфель' ? (
        <span className='table-row__name-item'>
          <button className='delete' onClick={deleteHandle}>
            Удалить
          </button>
        </span>
      ) : (
        <span className='table-row__name-item'>
          <button className='add' onClick={addHandle}>
            Добавить
          </button>
        </span>
      )}
    </div>
  );
};

export default Row;
