import React, { FC } from 'react';
import Column from '../../shared/ui/column/Column';
import Row, { UserStock } from '../../shared/ui/row/Row';
import { Types } from '../../shared/ui/table.title/Title';

interface ITable {
  stockArray: UserStock[];
  folder: Types;
}

const MainTable: FC<ITable> = ({ stockArray, folder }) => {
  return (
    <div className='main-table'>
      <div className='main-table__columns'>
        <Column />
      </div>
      <div className='main-table__rows'>
        {stockArray.length > 0
          ? stockArray.map((stockItem: UserStock) => <Row key={stockItem.symbol} folder={folder} rowItem={stockItem} />)
          : ''}
      </div>
    </div>
  );
};

export default MainTable;
