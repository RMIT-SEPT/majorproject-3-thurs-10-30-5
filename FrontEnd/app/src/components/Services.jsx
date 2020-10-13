import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  PageContent,
  Card,
  FieldStack,
  SelectMenuField,
  Alert,
  Label,
  InputField,
  Paragraph
} from 'bumbag';

import * as Loads from 'react-loads';
import useUser from '../hooks/useUser';
import axios from 'axios';

export default function Services() {
  //The value for the select service dropdown
  const [serviceValue, setServiceValue] = React.useState();
  //The value for the select worker dropdown
  const [workerValue, setWorkerValue] = React.useState();
  //The value for the select appointment time dropdown
  const [value, setValue] = React.useState();
  //The value for the date input
  const [dateValue, setDateValue] = React.useState();
  //Initializing custom react hook useUser
  const { user } = useUser();

  const history = useHistory();

  //////////////////////////////////////////////////////////////////
  //=========================SERVICES=============================//
  /////////////////////////////////////////////////////////////////
  // Get the services via a GET request and store them in a variable called services
  const getServices = React.useCallback(async () => {
    const response = await axios.get('http://localhost:8080/api/public/business');
    return response.data;
  }, []);

  //////////////////////////////////////////////////////////////////
  //==========================WORKER==============================//
  /////////////////////////////////////////////////////////////////
  // get the workers depending on which service is selected.
  const getWorkers = React.useCallback(async () => {
    //Create object with necessary data required to pass to the API via POST
    const data = { id: serviceValue.value, name: serviceValue.label };
    //Set the headers required for the API request
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      }
    };
    //Make the axios POST request, using the data object created earlier, and the headers.
    const response = await axios.post('http://localhost:8080/api/public/worker', JSON.stringify(data), options);
    console.log(response);
    //Modify the array returned so it can be placed into the select component.
    const workersResponse = response.data.map(({ id: value, firstName: label, ...rest }) => ({
      value,
      label,
      ...rest
    }));
    return workersResponse;
  }, [serviceValue]); //Set the dependency, so this POST request is called only when there is a change in the serviceValue state.

  //////////////////////////////////////////////////////////////////
  //=======================AVAILABILITY===========================//
  /////////////////////////////////////////////////////////////////
  // get the availabilitydepending on which service is selected.
  const getAvailability = React.useCallback(async () => {
    //Create object with necessary data required to pass to the API via POST
    const date = new Date(dateValue);
    console.log('Date: ', date);
    console.log('DateValue: ', dateValue);
    const data = {
      appointment: {
        appointmentTime: date
      },
      worker: {
        id: workerValue.value
      }
    };
    console.log('Worker Value', workerValue);
    //Set the headers required for the API request
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      }
    };

    //Make the axios POST request, using the data object created earlier, and the headers.
    const response = await axios.post(
      //'http://localhost:8080/api/public/availability/worker',
      'http://localhost:8080/api/booking/availability',
      JSON.stringify(data),
      options
    );
    console.log('Availability', response.data);

    let availabilityArr = response.data;

    availabilityArr = availabilityArr.map(item => {
      return {
        value: item.appointmentTime,
        label: item.description
      };
    });

    console.log('Availability Arr', availabilityArr);

    return availabilityArr;
  }, [dateValue]); //Set the dependency, so this POST request is called only when there is a change in the serviceValue state.

  //////////////////////////////////////////////////////////////////
  //=======================CREATEBOOKING==========================//
  /////////////////////////////////////////////////////////////////
  const createBooking = async () => {
    //Create object with necessary data required to pass to the API via POST
    const dateCreated = new Date();

    const data = {
      appointment: {
        appointmentTime: value.value,
        appointmentType: 'TESTTYPE',
        dateCreated: '2020-09-16T15:47:58.673Z',
        description: 'NULL'
      },
      user: {
        username: user.username
      },
      worker: {
        id: workerValue.value
      }
    };

    //Set the headers required for the API request
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      }
    };
    console.log('booking: ', data);
    //Make the axios POST request, using the data object created earlier, and the headers.
    const response = await axios
      .post('http://localhost:8080/api/booking/create', JSON.stringify(data), options)
      .then(res => {
        history.push('/appointments');
      })
      .catch(err => {});

    return response;
  };

  //use react Loads to complete the promise and store the data
  const servicesRecord = Loads.useLoads('services', getServices);
  const services = servicesRecord.response || [];

  //use react Loads to complete the promise and store the data
  let workersRecord = Loads.useLoads('workers', getWorkers);
  let workers = workersRecord.response || [];

  let availabilityRecord = Loads.useLoads('availability', getAvailability);
  let availability = availabilityRecord.response || [];

  /*
  Change the key values within the array, so it can be placed directly within the <Select> element (the select element requires an array of objects which 
  contain a value and a label)
  */
  const serviceList = services.map(({ id: value, name: label, ...rest }) => ({ value, label, ...rest }));

  return (
    <Box
      border="default"
      borderRadius="default"
      padding="20px"
      width="50%"
      marginTop="20px"
      marginLeft="25%"
      marginRight="20%"
      marginBottom="30%"
    >
      {servicesRecord.isRejected && <Alert type="danger">Error! {servicesRecord.error.message}</Alert>}
      <PageContent>
        <Heading textAlign="center"> Services </Heading>
        <SelectMenuField
          hasSearch
          width="100%"
          label="Step 1: Select a Service"
          onChange={setServiceValue}
          options={serviceList}
          placeholder="Select a Service"
          value={serviceValue}
        />
      </PageContent>

      <PageContent>
        <Box>
          <Card standalone>
            <Card.Header>
              <Card.Title margin="auto">{serviceValue ? serviceValue.label : ''}</Card.Title>
            </Card.Header>
            <Card.Content textAlign="center">
              {serviceValue ? (
                <React.Fragment>
                  <Heading use="h4" textAlign="center" paddingBottom="20px" paddingTop="20px">
                    Book your appointment now!
                  </Heading>
                  <SelectMenuField
                    width="100%"
                    label="Step 2: Select your preferred worker"
                    onChange={setWorkerValue}
                    options={workers}
                    placeholder="Select your desired worker..."
                    value={workerValue}
                    paddingBottom="50px"
                  />
                  <InputField
                    label="Step 3: Select your appointment date"
                    type="date"
                    id="start"
                    name="appointment-date"
                    value={dateValue}
                    min="2020-10-10"
                    max="2030-1-1"
                    onChange={e => setDateValue(e.target.value)}
                    disabled={workerValue ? false : true}
                    paddingBottom="50px"
                  />
                  <SelectMenuField
                    width="100%"
                    label="Step 4: Select your preferred time that the worker is available"
                    onChange={setValue}
                    options={availability}
                    placeholder="Select a day to book your appointment..."
                    value={value}
                    disabled={dateValue && workerValue ? false : true}
                    paddingBottom="100px"
                  />
                  {serviceValue.label && dateValue && value && (
                    <Paragraph paddingBottom="50px">
                      You are about to make a booking with {serviceValue.label} on {dateValue} at {value.value}. Is this
                      information correct? If so, please press the Book Now button below.
                    </Paragraph>
                  )}
                  <Button palette="primary" width="100%" margin="auto" onClick={createBooking}>
                    Book Now!
                  </Button>
                </React.Fragment>
              ) : (
                <Alert title="No Service Selected" type="danger">
                  To continue making a booking, please select a service above first.
                </Alert>
              )}
            </Card.Content>
            <Card.Footer />
          </Card>
        </Box>
      </PageContent>
    </Box>
  );
}
