import React from 'react';
import Calendar from 'react-calendar';
import {
  Card as BCard
} from 'react-bootstrap';

const CalendarWrapper = () => (
  <div className='top-level-wrapper'>
    <BCard className='my-4'>
      <Calendar />
    </BCard>
  </div>
);

export default CalendarWrapper;
