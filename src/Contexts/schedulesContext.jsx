import React, {
  useState, createContext, useContext, useEffect,
} from 'react';
import { toast } from 'react-toastify';
import axios from '../Utils/api';

const SchedulesContext = createContext();

export default function SchedulesProvider({ children }) {
  const [schedules, setSchedules] = useState([{ }]);

  const fetchData = async () => {
    try {
      const response = await axios.get('./schedule');
      setSchedules(response.data.data);
    } catch (error) {
      toast.error('Sorry, deu erro :( ');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SchedulesContext.Provider
      value={{ schedules, setSchedules, fetchData }}
    >
      {children}
    </SchedulesContext.Provider>
  );
}

export function useSchedule() {
  const context = useContext(SchedulesContext);
  const { schedules, setSchedules } = context;
  return { schedules, setSchedules };
}
