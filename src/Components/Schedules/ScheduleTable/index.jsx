/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../../Utils/api';
import Page from '../../Page';

const scheduleTable = () => {
  const [schedules, setSchedules] = useState([]);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('/api/patient');
      setSchedules(response.data.data);
    } catch (error) {
      toast.error('N consegui trazer os dados da API');
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (

    <Page>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th width="60%">Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((scheduleList) => (
            <tr key={scheduleList._id}>
              <td>
                {scheduleList.patientName}
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};

export default scheduleTable;
