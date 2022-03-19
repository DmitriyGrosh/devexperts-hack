import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/locale/locale_ru';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_year_view';

import './style.scss';
import Tools from '../../features/tools';
import Lightbox from '../../features/lightbox';
import { events, timestamps } from './mocks';

const { scheduler } = window;

const Calendar = () => {
  const calendarRefContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('==========>timestamps.AAPL.close.length', timestamps.AAPL.close.length);
    console.log('==========>timestamps.AAPL.timestamp.length', timestamps.AAPL.timestamp.length);
    scheduler.clearAll();
    scheduler.skin = 'material';
    // scheduler.config.readonly = true;
    scheduler.config.header = ['week', 'month', 'year', 'date', 'prev', 'today', 'next'];
    scheduler.config.details_on_dblclick = true;
    scheduler.config.details_on_create = true;
    if (calendarRefContainer.current) {
      scheduler.init(calendarRefContainer.current, new Date());
      console.log('==========>events', events);
      scheduler.parse(events);
    }
  }, []);
  return (
    <>
      <Tools />
      <div className='scheduler-container'>
        <div
          id='scheduler_here'
          ref={calendarRefContainer}
          className='dhx_cal_container'
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <Lightbox />
      </div>
    </>
  );
};

export default Calendar;
