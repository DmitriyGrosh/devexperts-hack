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
        <span className='table-column__name-item'>Цена акции на закрытие</span>
        <span className='table-column__name-item'>Дивидендная доходность</span>
      </div>
    </div>
  );
};

export default Column;
