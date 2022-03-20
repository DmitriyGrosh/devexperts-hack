import './searchstyles.scss';
import React, { FC, ChangeEvent } from 'react';

interface ISearch {
  filterStocks: (event: ChangeEvent<HTMLInputElement>, ...rest: any[]) => void;
  searchValue: string;
}

const Search: FC<ISearch> = ({ filterStocks, searchValue }) => {
  return (
    <div className='search-form'>
      <input type='text' placeholder='Поиск...' value={searchValue} onChange={filterStocks} />
    </div>
  );
};

export default Search;
