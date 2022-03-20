import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, Select, Box, InputLabel, MenuItem } from '@mui/material';
import useWindowSize from '../../features/line.chart/hook';

import { RenderLineChart } from '../../features/line.chart';

import './style.scss';

type Ticker = 'y' | 'd' | 'mo';

const StocksView = () => {
  const [range, setRange] = useState<Ticker>('y');
  const [interval, setInterval] = useState<Ticker>('d');

  const size = useWindowSize();
  const { id } = useParams();

  const handleChangeRange = (event: Ticker) => {
    setRange(event);
  };

  useEffect(() => {
    const bug = Array.from(document.getElementsByClassName('dhx_year_tooltip'));
    if (bug.length && bug[0]) {
      // @ts-ignore
      bug[0].style.display = 'none';
    }
  }, []);

  return (
    <div>
      <div className='line-chart-container'>
        <Box display='flex' alignItems='center' justifyContent='space-between' padding='0 20px 40px 60px'>
          <ButtonGroup
            size='large'
            className='buttons-group'
            color='secondary'
            variant='outlined'
            aria-label='outlined button group'
          >
            <Button onClick={() => handleChangeRange('y')} className={range === 'y' ? 'active' : ''}>
              Год
            </Button>
            <Button onClick={() => handleChangeRange('mo')} className={range === 'mo' ? 'active' : ''}>
              Месяц
            </Button>
            <Button onClick={() => handleChangeRange('d')} className={range === 'd' ? 'active' : ''}>
              День
            </Button>
          </ButtonGroup>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel color='secondary' id='demo-simple-select-label'>
                Интервал
              </InputLabel>
              <Select
                color='secondary'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={interval}
                label='Интервал'
                onChange={(event) => setInterval(event.target.value as Ticker)}
              >
                <MenuItem color='secondary' value='y'>
                  Год
                </MenuItem>
                <MenuItem color='secondary' value='mo'>
                  Месяц
                </MenuItem>
                <MenuItem color='secondary' value='d'>
                  День
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <RenderLineChart width={size.width} />
      </div>
    </div>
  );
};

export default StocksView;
