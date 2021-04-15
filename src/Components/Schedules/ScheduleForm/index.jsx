import React, { useState } from 'react';
import {
  Formik, Field,
} from 'formik';
import {
  Form, Col, Button, Dropdown,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Page from '../../Page';

const scheduleForm = () => {
  const [selectedBirthday, setSelectedBirthday] = useState();
  const [scheduleDay, setScheduleDay] = useState();

  return (

    <Formik
      initialValues={
        {
          patientName: '',
          patientBirthday: '',
          scheduleDay: '',
          scheduleHour: '',
        }
        }
      onSubmit={(data, { setSubmitting }) => { // Colocar um resetForm
        console.log(data);
        console.log(`Data de nascimento: ${selectedBirthday}`);
        console.log(`Data do agendamento: ${scheduleDay}`);
        setSubmitting(false);
      }}
    >

      {({
        values, handleSubmit, handleChange, isSubmitting,
      }) => (
        <Page title="Agendamento " mainTitle="Agente sua Vacinação!">

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupName">
              <Form.Row>
                <Col xs={6}>
                  <Form.Label>Nome Completo</Form.Label>
                  <Field value={values.patientName} name="patientName" onChange={handleChange} placeholder="Seu nome aqui" as={Form.Control} />

                </Col>

              </Form.Row>
            </Form.Group>
            <Form.Group controlId="formGroupDate">
              <Form.Row>
                <Col xs={3}>
                  <Form.Label>Data de Nascimento</Form.Label>

                  <DatePicker
                    selected={selectedBirthday}
                    onChange={(date) => setSelectedBirthday(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                  />

                </Col>
              </Form.Row>
            </Form.Group>
            <br />

            <Form.Group controlId="paraAgendar">
              <Form.Label>Dias e Horários disponíveis:</Form.Label>
              <Form.Row>
                <DatePicker
                  selected={scheduleDay}
                  onChange={(date) => setScheduleDay(date)}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  showMonthDropdown
                />

                <Dropdown className="ml-2">
                  <Dropdown.Toggle variant="outline-primary"> Horários </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>8:30</Dropdown.Item>
                    <Dropdown.Item>8:45</Dropdown.Item>
                    <Dropdown.Item>9:00</Dropdown.Item>
                    <Dropdown.Item>9:15</Dropdown.Item>
                    <Dropdown.Item>9:30</Dropdown.Item>
                    <Dropdown.Item>9:45</Dropdown.Item>
                    <Dropdown.Item>10:00</Dropdown.Item>
                    <Dropdown.Item>10:15</Dropdown.Item>
                    <Dropdown.Item>10:30</Dropdown.Item>
                    <Dropdown.Item>10:45</Dropdown.Item>
                    <Dropdown.Item>11:00</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Form.Row>
            </Form.Group>
            <Button disabled={isSubmitting} type="submit"> Agendar! </Button>
          </Form>

        </Page>

      )}

    </Formik>
  );
};

export default scheduleForm;
