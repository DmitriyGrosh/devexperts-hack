import moment from 'moment';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { updateUserStock } from '../../../features/tools/model/stock.slice';
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
  const { userStocks, stocksNames } = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  const deleteHandle = () => {
    const filteredUserStock = userStocks.filter((userStock: UserStock) => userStock.symbol !== rowItem.symbol);
    dispatch(updateUserStock(filteredUserStock));
    // dispatch(addUserStock(rowItem.symbol));
  };
  const addHandle = () => {
    const filteredUsrStocks = userStocks.filter((stock) => {
      return stock.symbol === rowItem.symbol;
    });
    if (filteredUsrStocks.length === 0) {
      const newUserStock = [...userStocks, ...stocksNames.filter((el) => el.symbol === rowItem.symbol)];
      dispatch(updateUserStock(newUserStock));
    }
    // const stockInArray: UserStock | undefined = userStocks.find(
    //   (userStock: UserStock) => userStock.symbol === rowItem.symbol,
    // );
    // if (!stockInArray) {
    //   const addedIntoStock = [...userStocks, rowItem];
    //   dispatch(addUserStockThunk(addedIntoStock));
    // }
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
      <span className='table-row__name-item'>{lastDividend?.recoverDays} Дней</span>
      <span className='table-row__name-item'>{lastDividend?.gap} %</span>
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
