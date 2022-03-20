import React, { FC, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import { events, timestamps } from '../../view/calendar/mocks';

moment.locale('ru');

interface IContent {
  date: string;
  count: number;
  dividendPrice: number;
  name: string;
  symbol: string;
  id: string;
}

const Content: FC<IContent> = ({ date, count, dividendPrice, name, symbol, id }) => {
  const [lastEvent, setLastEvent] = useState<any>(null);
  const [nextEvent, setNextEvent] = useState<any>(null);

  useEffect(() => {
    let newData: any[] = [];
    events.forEach((el) => {
      if (el.dividends?.length) {
        newData = [...newData, ...el.dividends];
      }
    });

    const filtered = newData.filter((el) => el.symbol === symbol);

    filtered.forEach((el, index) => {
      if (el.count === count) {
        setLastEvent(filtered[index + 1]);
        setNextEvent(filtered[index - 1]);
      }
    });
  }, [count, symbol]);

  return (
    <div className='lightbox-content'>
      <div className='line'>
        <p className='name'>Выплвчено дивидентов</p>
        <p>{dividendPrice}$</p>
      </div>
      <div className='line'>
        <p className='name'>Предыдущая выплата:</p>
        {lastEvent ? <p>{moment(lastEvent.date).format('LL')}</p> : <p>неизвестно</p>}
      </div>
      <div className='line'>
        <p className='name'>Следуящая выплата:</p>
        {nextEvent && count !== 1 ? <p>{moment(nextEvent.date).format('LL')}</p> : <p>неизвестно</p>}
      </div>
    </div>
  );
};

export default Content;
