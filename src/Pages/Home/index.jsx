import React from 'react';
import SchedulesProvider from '../../Contexts/schedulesContext';
import ScheduleForm from '../../Components/Schedules/ScheduleForm';

export default function index() {
  return (
    <SchedulesProvider>
      <ScheduleForm />
    </SchedulesProvider>

  );
}
