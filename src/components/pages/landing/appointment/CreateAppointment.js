import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import AppContext from 'context/Context';
import DatePicker from 'react-datepicker';
import { addDays, setHours, setMinutes, subDays } from 'date-fns';
import { Link } from 'react-router-dom';
//''''''''''-From Here
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createAppointment } from '../../../../graphql/mutations';
import awsExports from './../../../../aws-exports';
Amplify.configure(awsExports);
//''''''''''-TO Here
const CreateAppointment = ({
  isOpenAppointmentModal,
  setIsOpenAppointmentModal,
  appointmentDate,
  setAppointmentDate,
  hasLabel
}) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    start: '',
    isAccepted: false
  });
  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const handleClose = () => {
    setIsOpenAppointmentModal(!isOpenAppointmentModal);
    formData.isAccepted = false;
  };

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = name === 'allDay' ? target.checked : target.value;
    setFormData({ ...formData, [name]: value });
  };

  async function addAppointment(data) {
    //console.log('inja');
    //''''''''''-From Here
    try {
      // if (!formState.name || !formState.description) return;
      // const appointment = { data };
      //console.log(data);
      // setAppointments([...appointments, appointment]);
      //setData(initialState);
      await API.graphql(graphqlOperation(createAppointment, { input: data }));
    } catch (err) {
      console.log('error creating appointment:', err);
    }
    //''''''''''-TO Here
    ////handleClose();
  }
  const handleSubmit = e => {
    e.preventDefault();
    setIsOpenAppointmentModal(false);

    // console.log({
    //   name: formData.name,
    //   email: formData.email,
    //   phoneNumber: formData.phoneNumber,
    //   start: formData.start,
    //   isAccepted: formData.isAccepted
    // });
    //following line in false!
    //data => addAppointment(data);
    addAppointment(formData);
    formData.isAccepted = false;
  };
  useEffect(() => {
    if (isOpenAppointmentModal) {
      setFormData({
        ...formData,
        start: appointmentDate
      });
    } else {
      setAppointmentDate(null);
    }
  }, [isOpenAppointmentModal, appointmentDate]);

  const checkEmail = email => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const emailIsValid = checkEmail(formData.email);

  const checkPhoneNumber = phoneNumber => {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,10}$/.test(
      phoneNumber
    );
  };

  const phoneNumberIsValid = checkPhoneNumber(formData.phoneNumber);

  return (
    <Modal
      show={isOpenAppointmentModal}
      onHide={handleClose}
      contentClassName="border"
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header
          closeButton
          closeVariant={isDark ? 'white' : undefined}
          className="bg-light px-x1 border-bottom-0"
        >
          <Modal.Title as="h5"> Strategy Call</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-x1">
          <Form.Group className="mb-3">
            <Form.Label className="fs-0">How may We address you?</Form.Label>
            {hasLabel && <Form.Label>Name</Form.Label>}
            <Form.Control
              placeholder={!hasLabel ? 'Mr. John Smith' : ''}
              // value={formData.name}
              //required
              name="name"
              onChange={handleChange}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-0">
              Please write your company Email address
            </Form.Label>
            {hasLabel && <Form.Label>Email address</Form.Label>}
            <Form.Control
              placeholder={!hasLabel ? 'John.Smith@your-company.com' : ''}
              //value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-0">
              A phone number where we can reach you
            </Form.Label>
            {hasLabel && <Form.Label>Phone Number</Form.Label>}
            <Form.Control
              placeholder={!hasLabel ? '+49211...' : ''}
              //value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label className="fs-0">Chose best Date & time </Form.Label>
            <DatePicker
              selected={appointmentDate}
              onChange={date => {
                setAppointmentDate(date);
                setFormData({ ...formData, start: date });
              }}
              timeIntervals={120}
              //https://reactdatepicker.com/#example-custom-day
              className="form-control"
              placeholderText="DD-MM-YYYY HH:MM"
              dateFormat="d-MM-yyyy h:mm"
              filterDate={isWeekday}
              filterTime={filterPassedTime}
              minDate={subDays(new Date(), 1)}
              maxDate={addDays(new Date(), 31)}
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 0),
                setHours(setMinutes(new Date(), 30), 0),
                setHours(setMinutes(new Date(), 0), 1),
                setHours(setMinutes(new Date(), 30), 1),
                setHours(setMinutes(new Date(), 0), 2),
                setHours(setMinutes(new Date(), 30), 2),
                setHours(setMinutes(new Date(), 0), 3),
                setHours(setMinutes(new Date(), 30), 3),
                setHours(setMinutes(new Date(), 0), 4),
                setHours(setMinutes(new Date(), 30), 4),
                setHours(setMinutes(new Date(), 0), 5),
                setHours(setMinutes(new Date(), 30), 5),
                setHours(setMinutes(new Date(), 0), 6),
                setHours(setMinutes(new Date(), 30), 6),
                setHours(setMinutes(new Date(), 0), 7),
                setHours(setMinutes(new Date(), 30), 7),
                //setHours(setMinutes(new Date(), 0), 8),
                setHours(setMinutes(new Date(), 30), 8),
                setHours(setMinutes(new Date(), 0), 9),
                setHours(setMinutes(new Date(), 30), 9),
                //setHours(setMinutes(new Date(), 0), 10),
                setHours(setMinutes(new Date(), 30), 10),
                setHours(setMinutes(new Date(), 0), 11),
                setHours(setMinutes(new Date(), 30), 11),
                //setHours(setMinutes(new Date(), 0), 12),
                setHours(setMinutes(new Date(), 30), 12),
                setHours(setMinutes(new Date(), 0), 13),
                setHours(setMinutes(new Date(), 30), 13),
                setHours(setMinutes(new Date(), 0), 14),
                setHours(setMinutes(new Date(), 30), 14),
                setHours(setMinutes(new Date(), 0), 15),
                setHours(setMinutes(new Date(), 30), 15),
                setHours(setMinutes(new Date(), 0), 16),
                setHours(setMinutes(new Date(), 30), 16),
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 17),
                setHours(setMinutes(new Date(), 0), 18),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 0), 19),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 0), 20),
                setHours(setMinutes(new Date(), 30), 20),
                setHours(setMinutes(new Date(), 0), 21),
                setHours(setMinutes(new Date(), 30), 21),
                setHours(setMinutes(new Date(), 0), 22),
                setHours(setMinutes(new Date(), 30), 22),
                setHours(setMinutes(new Date(), 0), 23),
                setHours(setMinutes(new Date(), 30), 23),
                setHours(setMinutes(new Date(), 0), 24),
                setHours(setMinutes(new Date(), 30), 24)
              ]}
              showTimeSelect
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="acceptCheckbox"
              className="form-check"
            >
              <Form.Check.Input
                type="checkbox"
                name="isAccepted"
                checked={formData.isAccepted}
                onChange={e =>
                  setFormData({
                    ...formData,
                    isAccepted: e.target.checked
                  })
                }
              />
              <Form.Check.Label className="form-label">
                I accept the <Link to="#!">terms</Link> and{' '}
                <Link to="#!">privacy policy</Link>
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>

          <Form.Group className="mb-4">
            <Button
              className="w-100"
              type="submit"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.isAccepted ||
                !formData.start ||
                !emailIsValid ||
                !phoneNumberIsValid
              }
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

CreateAppointment.propTypes = {
  setIsOpenAppointmentModal: PropTypes.func.isRequired,
  isOpenAppointmentModal: PropTypes.bool.isRequired,
  appointmentDate: PropTypes.instanceOf(Date),
  setAppointmentDate: PropTypes.func.isRequired,
  hasLabel: PropTypes.bool
};

export default CreateAppointment;
