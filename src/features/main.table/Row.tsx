import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './row.scss';

interface IRow {
  rowItem: object;
}

const Row: FC<IRow> = ({ rowItem }) => {
  return (
    <div className='table-row'>
      <span className='table-row__name-item'>
        <Link to='/kek'>Название</Link>
      </span>
      <span className='table-row__name-item'>Последний день покупки</span>
      <span className='table-row__name-item'>Дата закрытия</span>
      <span className='table-row__name-item'>Размер дивидендов</span>
      <span className='table-row__name-item'>Цена акции на закрытие</span>
      <span className='table-row__name-item'>Дивидендная доходность</span>
    </div>
  );
};

export default Row;
