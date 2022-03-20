import React, { useRef, useEffect, useState } from 'react';
import moment from 'moment';

import Header from './Header';

import './style.scss';
import Footer from './Footer';
import Content from './Content';

const { scheduler } = window;

const Lightbox = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [idEvent, setIdEvent] = useState<string>('');
  const [dividendPrice, setDividendPrice] = useState<number>(0);
  const [symbol, setSymbol] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const closeForm = () => {
    if (formRef.current) {
      scheduler.endLightbox(false, formRef.current);
    }
  };

  useEffect(() => {
    scheduler.showLightbox = (id) => {
      if (formRef.current) {
        scheduler.startLightbox(id, formRef.current);
        const event = scheduler.getEvent(scheduler.getState().lightbox_id);
        const start = moment(event.start_date).format('HH:mm');
        const end = moment(event.end_date).format('HH:mm');

        setName(event.text);
        setTime(`${start} - ${end}`);
        setCount(event.count);
        setIdEvent(event.id);
        setDividendPrice(event.dividendPrice);
        setSymbol(event.symbol);
        setDate(event.date);

        if (!event.symbol) {
          scheduler.endLightbox(false, formRef.current);
        }
      }
    };
  }, []);

  console.log('==========>count', count);

  return (
    <div ref={formRef} id='lightbox-form'>
      <Header name={name} time={time} />
      <Content count={count} dividendPrice={dividendPrice} symbol={symbol} />
      <Footer id={idEvent} symbol={symbol} date={date} handleCLick={closeForm} />
    </div>
  );
};

export default Lightbox;
