import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, Select, Box, InputLabel, MenuItem, Typography } from '@mui/material';
import useWindowSize from '../../features/line.chart/hook';
import { useAppSelector } from '../../redux/hooks';
import api from '../../shared/api';

import { RenderLineChart } from '../../features/line.chart';

import './style.scss';
import axios from 'axios';
import { events, changedData } from '../calendar/mocks';
import moment from 'moment';

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

interface Div {
  shortName: string;
  currentPrice: number;
  dividends: { dividendPriceStatistic: { prices: number[]; timestamp: number[] } }[];
}

const StocksView = () => {
  const { dividends, currentStock } = useAppSelector((state) => state.stocks);
  const [range, setRange] = useState<Ticker>('y');
  const [interval, setInterval] = useState<Ticker>('d');
  const [chartData, setChartData] = useState<Array<{ price: number; name: string }>>([]);
  const [divind, setDivind] = useState<Div | null>(null);
  const [gap, setGap] = useState<number>(0);
  const [days, setDays] = useState<Array<{ price: number; name: string }>>([]);

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
    await api
      .get<{ timestamp: number[]; open: number[] }>(
        `${process.env.REACT_APP_SERVER}yahoo-finance/tickers/price/${current.symbol}/1${range}/1${interval}`,
      )
      .then((res) => {
        const dataRes = [] as { name: string; price: number }[];
        res.data.timestamp.forEach((el, index) => {
          const event = {
            name: moment.unix(el).format('l'),
            price: res.data.open[index],
          };

          dataRes.push(event);
        });
        console.log('==========>dataRes', dataRes);
        setChartData(dataRes);
        console.log('==========>data', res);
      })
      .catch((err) => {
        console.log('==========>1', 1);
        const dataRes = [] as { name: string; price: number }[];
        changedData.timestamp.forEach((el, index) => {
          const event = {
            name: new Date(el).toString(),
            price: changedData.prices[index],
          };

          dataRes.push(event);
        });
        console.log('==========>dataRes', dataRes);
        setChartData(dataRes);
      });

    await api
      .get<{ value: number }>(
        `${process.env.REACT_APP_SERVER}yahoo-finance/tickers/${current.symbol}/${
          new Date(current.date).getTime() / 1000
        }`,
      )
      // eslint-disable-next-line no-shadow
      .then((data) => {
        setGap(data.data.value || 0);
        console.log('==========>data', data);
      })
      .catch((err) => {
        console.log('==========>err', err);
      });

    await api
      .get<Div[]>(`${process.env.REACT_APP_SERVER}yahoo-finance/tickers/info/${current.symbol}`)
      // eslint-disable-next-line no-shadow
      .then((data) => {
        setDivind(data.data[0]);
        const array = [] as { name: string; price: number }[];
        const newPtices = data.data[0].dividends[0].dividendPriceStatistic.prices;
        newPtices.forEach((el, index) => {
          const datett = data.data[0].dividends[0].dividendPriceStatistic.timestamp;
          const event = {
            name: moment.unix(datett[index]).format('l'),
            price: el,
          };

          array.push(event);
        });
        setDays(array);
        console.log('==========>data asdasdasd asdasdas dasda', data.data);
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

  console.log(
    '==========>divind?.dividends[0].dividendPriceStatistic.prices.length',
    divind?.dividends[0].dividendPriceStatistic.prices.length,
  );
  console.log('==========>divind?.dividends[0].dividendPriceStatistic.prices.length', divind?.dividends[0]);
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
          <div>Название: {current.symbol}</div>
          <div>
            Размер гэпа: <span>{gap}</span>
          </div>
          <div>закрытие гэпа через {divind?.dividends[0].dividendPriceStatistic.prices.length} день</div>
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
        <Box display='flex' justifyContent='center'>
          <Typography color='secondary'>График длины гэпа</Typography>
        </Box>
        <RenderLineChart data={days} width={size.width} />
      </div>
    </div>
  );
};

export default StocksView;
