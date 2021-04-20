import React from 'react';
import SchedulesProvider from '../../Contexts/schedulesContext';
import ScheduleTable from '../../Components/Schedules/ScheduleTable';

export default function index() {
  return (
    <SchedulesProvider>
      <div>
        <ScheduleTable />

      </div>
    </SchedulesProvider>

  );
}
