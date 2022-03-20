import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, Select, Box, InputLabel, MenuItem } from '@mui/material';
import useWindowSize from '../../features/line.chart/hook';
import { useAppSelector } from '../../redux/hooks';

import { RenderLineChart } from '../../features/line.chart';

import './style.scss';
import axios from 'axios';
import { events } from '../calendar/mocks';

const data = [
  {
    name: 'Page',
    uv: 4000,
  },
  {
    name: 'Page',
    uv: 3000,
  },
  {
    name: 'Page',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page',
    uv: 3490,
  },
];

type Ticker = 'y' | 'd' | 'mo';

interface Table {
  date: number[];
  prices: string[];
  symbol: string;
}

const StocksView = () => {
  const { dividends, currentStock } = useAppSelector((state) => state.stocks);
  const [range, setRange] = useState<Ticker>('y');
  const [interval, setInterval] = useState<Ticker>('d');
  const [chartData, setChartData] = useState<Array<{ uv: number; name: string }>>([]);

  const size = useWindowSize();
  const { id } = useParams();

  let newData: any[] = [];
  events.forEach((el) => {
    if (el.dividends?.length) {
      newData = [...newData, ...el.dividends];
    }
  });

  console.log('==========>newData', newData);
  const currentId = Number(id);
  const current = dividends.find((el) => el.id === currentId) || newData.find((el) => el.id === currentId);

  console.log('==========>current', current);

  const handleChangeRange = (event: Ticker) => {
    setRange(event);
  };

  const initData = async () => {
    axios
      .get(`http://www.astra-dev.site:3000/yahoo-finance/tickers/price/${current.symbol}/1${range}/1${interval}`)
      .then((res) => {
        // setChartData(res);
        console.log('==========>data', res);
      })
      .catch((err) => {
        setChartData(data);
      });
  };

  useEffect(() => {
    const bug = Array.from(document.getElementsByClassName('dhx_year_tooltip'));
    if (bug.length && bug[0]) {
      // @ts-ignore
      bug[0].style.display = 'none';
    }

    initData();
  }, [range, interval]);

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
        <RenderLineChart data={chartData} width={size.width} />
      </div>
    </div>
  );
};

export default StocksView;
