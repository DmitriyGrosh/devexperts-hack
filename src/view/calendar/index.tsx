import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/locale/locale_ru';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_year_view';

import './style.scss';
import Tools from '../../features/tools';
import Lightbox from '../../features/lightbox';

const { scheduler } = window;

const Calendar = () => {
  const calendarRefContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scheduler.clearAll();
    scheduler.skin = 'material';
    // scheduler.locale.labels.year_tab = 'Year';
    scheduler.config.readonly = true;
    scheduler.config.header = ['week', 'month', 'year', 'date', 'prev', 'today', 'next'];
    scheduler.config.details_on_dblclick = true;
    if (calendarRefContainer.current) {
      scheduler.init(calendarRefContainer.current, new Date());
    }
    scheduler.clearAll();
  }, []);
  return (
    <div className='scheduler-container'>
      <Tools />
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
  );
};

export default Calendar;
