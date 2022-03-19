import React, { FC, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import { events, timestamps } from '../../view/calendar/mocks';

moment.locale('ru');

interface IContent {
  date: string;
  count: number;
}

const Content: FC<IContent> = ({ date, count }) => {
  const [lastEvent, setLastEvent] = useState<any>(null);
  const [nextEvent, setNextEvent] = useState<any>(null);

  useEffect(() => {
    console.log('==========>count content', count);
    events.forEach((el, index) => {
      console.log('==========>el.count', el.count);
      if (el.count === count) {
        console.log('==========>1', 1);
        console.log('==========>events[index + 1]', events[index + 1]);
        console.log('==========>events[index -1 ]', events[index - 1]);
        setLastEvent(events[index + 1]);
        setNextEvent(events[index - 1]);
      }
    });
  }, [count]);

  console.log('==========>lastEvent', lastEvent);
  console.log('==========>nextEvent', nextEvent);

  return (
    <div className='lightbox-content'>
      <div className='line'>
        <p className='name'>Предыдущая выплата:</p>
        {lastEvent ? <p>{moment(lastEvent.date).format('LL')}</p> : <p>неизвестно</p>}
      </div>
      <div className='line'>
        <p className='name'>Следуящая выплата:</p>
        {nextEvent ? <p>{moment(nextEvent.date).format('LL')}</p> : <p>неизвестно</p>}
      </div>
    </div>
  );
};

export default Content;
