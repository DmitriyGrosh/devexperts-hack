import React, { useState, FC } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { UserStock } from '../row/Row';

interface IProps {
  stocks: UserStock[];
  handleSetSearch: (event: UserStock) => void;
}

const AutocompleteStocks: FC<IProps> = ({ stocks, handleSetSearch }) => {
  const [value, setValue] = useState<UserStock | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (newValue) {
            setValue(newValue);
            handleSetSearch(newValue);
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id='controllable-states-demo'
        getOptionLabel={(option) => option.symbol}
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Выбор тикера' color='secondary' />}
      />
    </div>
  );
};

export default AutocompleteStocks;
