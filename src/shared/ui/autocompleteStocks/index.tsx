import React, { useState, FC } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IProps {
  stocks: { id: string }[];
  handleSetSearch: (event: { id: string }) => void;
}

const AutocompleteStocks: FC<IProps> = ({ stocks, handleSetSearch }) => {
  const [value, setValue] = useState<{ id: string } | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  console.log('==========>value', value);
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
        getOptionLabel={(option) => option.id}
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Controllable' />}
      />
    </div>
  );
};

export default AutocompleteStocks;
