import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/locale/locale_ru';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_year_view';

import './style.scss';

const { scheduler } = window;

const Calendar = () => {
  const calendarRefContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scheduler.skin = 'material';
    // scheduler.locale.labels.year_tab = 'Year';
    scheduler.config.header = ['week', 'month', 'year', 'date', 'prev', 'today', 'next'];
    if (calendarRefContainer.current) {
      scheduler.init(calendarRefContainer.current, new Date());
    }
    scheduler.clearAll();
  }, []);
  return (
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
    </div>
  );
};

export default Calendar;
