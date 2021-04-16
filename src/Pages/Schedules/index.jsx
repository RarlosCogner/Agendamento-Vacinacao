import React, { useState } from 'react';
import ScheduleTable from '../../Components/Schedules/ScheduleTable';

export default function index() {
  const [schedules, setSchedules] = useState([]);

  return (
    <ScheduleTable schedules={schedules} setSchedules={setSchedules} />
  );
}
