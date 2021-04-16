import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function index({ schedules = [] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width="60%">Nome</th>
          <th>Idade</th>
          <th>Data de Atendimento</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule) => (
          <tr>
            <td>
              <span>
                {schedule.patientName}
              </span>
            </td>
            <td>

              <Button> Remover </Button>
            </td>

          </tr>

        ))}

      </tbody>
    </Table>
  );
}
