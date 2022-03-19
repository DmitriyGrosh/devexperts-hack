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
  const [date, setDate] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [idEvent, setIdEvent] = useState<number>(0);

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
        setDate(event.date);
        setCount(event.count);
        setIdEvent(event.id);

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
      <Content count={count} date={date} />
      <Footer id={idEvent} handleCLick={closeForm} />
    </div>
  );
};

export default Lightbox;
