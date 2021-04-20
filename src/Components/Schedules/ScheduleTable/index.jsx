import React from 'react';
// import { Table, Button } from 'react-bootstrap';
import { useSchedule } from '../../../Contexts/schedulesContext';

export default function index() {
  const { schedules } = useSchedule();

  return (
    <div className="schedules">
      {schedules.map((schedule) => (
        <div key={schedules.length + 1}>

          {console.log(JSON.stringify(schedule))}
          {' '}

          ;
        </div>
      ))}
    </div>
  );
}
