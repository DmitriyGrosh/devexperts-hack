import React, { FC } from 'react';

import './column.scss';

const Column: FC = () => {
  return (
    <div className='table-column'>
      <div className='table-column__name'>
        <span className='table-column__name-item'>Название</span>
        <span className='table-column__name-item'>Последний день покупки</span>
        <span className='table-column__name-item'>Дата закрытия</span>
        <span className='table-column__name-item'>Размер дивидендов</span>
        <span className='table-column__name-item'>Текущая цена акции</span>
        <span className='table-column__name-item'>Кол-во дней до возврата</span>
        <span className='table-column__name-item'>ГЭП</span>
        <span className='table-column__name-item'>Действие</span>
      </div>
    </div>
  );
};

export default Column;
