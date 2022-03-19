import './searchstyles.scss';
import React, { FC, useState } from 'react';

type Props = {};
const Search: FC = (props: Props) => {
  const textSearch = '';
  return (
    <div className='search-form'>
      <form>
        <input type='text' placeholder='Поиск...' value={textSearch} onChange={() => {}} />
        <button type='submit' />
      </form>
    </div>
  );
};
export default Search;
