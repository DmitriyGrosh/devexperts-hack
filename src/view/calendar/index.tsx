import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../redux/hooks';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/locale/locale_ru';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_year_view';

import './style.scss';
import Tools from '../../features/tools';
import Lightbox from '../../features/lightbox';
import { events } from './mocks';

const { scheduler } = window;

const Calendar = () => {
  const { activeStocks } = useAppSelector((state) => state.stocks);
  const calendarRefContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scheduler.clearAll();
    scheduler.skin = 'material';
    // scheduler.config.readonly = true;
    scheduler.config.header = ['week', 'month', 'year', 'date', 'prev', 'today', 'next'];
    scheduler.config.details_on_dblclick = true;
    scheduler.config.details_on_create = true;
    if (calendarRefContainer.current) {
      scheduler.init(calendarRefContainer.current, new Date());
      let newData: any[] = [];
      events.forEach((el) => {
        if (el.dividends?.length) {
          newData = [...newData, ...el.dividends];
        }
      });
      if (activeStocks.length) {
        const names = activeStocks.map((el) => el.symbol);

        const filtered: any[] = [];
        newData.forEach((el) => {
          if (names.indexOf(el.symbol) !== -1) {
            filtered.push(el);
          }
        });

        scheduler.parse(filtered);
      } else {
        scheduler.parse(newData);
      }
    }
  }, [activeStocks.length]);
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
