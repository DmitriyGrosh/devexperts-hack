import './searchstyles.scss';
import React, {FC, useState} from 'react';



type Props = {};
const Search: FC = (props: Props) => {
    let textSearch = '';
    return (
        <div className="search-form">
            <form>
                <input type="text" placeholder="Поиск..."  value={textSearch} onChange={() => {return}}></input>
                    <button type="submit">
                    </button>
            </form>
        </div>
    );
};
export default Search;