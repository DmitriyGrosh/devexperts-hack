import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/locale/locale_ru';

import './style.scss';

const { scheduler } = window as any;

const Calendar = () => {
  const schedule = useRef(null);
  useEffect(() => {
    scheduler.skin = 'material';
    scheduler.config.header = ['week', 'month', 'year', 'date', 'prev', 'today', 'next'];
    scheduler.init(schedule.current as unknown as HTMLElement, new Date());
    scheduler.clearAll();
  }, []);
  return <div ref={schedule} className='container calendar' />;
};

export default Calendar;
