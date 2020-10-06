import React from 'react';
import { Box, Button, Heading, PageContent, Card, FieldStack, SelectMenuField, Alert } from 'bumbag';
import * as Loads from 'react-loads';
import api from '../services/api.jsx';
import axios from 'axios';

export default function Services() {
  //The value for the select service dropdown
  const [serviceValue, setServiceValue] = React.useState();

  const [workerValue, setWorkerValue] = React.useState();

  const [value, setValue] = React.useState();

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
    const data = {
      id: workerValue.value,
      firstName: serviceValue.label,
      lastName: workerValue.lastName,
      availability: { id: workerValue.availabilityId }
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
      'http://localhost:8080/api/public/availability/worker',
      JSON.stringify(data),
      options
    );
    console.log('Availability', response.data);

    let availabilityArr = [];

    for (const key in response.data) {
      if (response.data[key] === true) {
        availabilityArr = [...availabilityArr, { label: key, value: key }];
      }
    }

    return availabilityArr;
  }, [workerValue]); //Set the dependency, so this POST request is called only when there is a change in the serviceValue state.

  //////////////////////////////////////////////////////////////////
  //=======================CREATEBOOKING==========================//
  /////////////////////////////////////////////////////////////////
  const createBooking = React.useCallback(async () => {
    //Create object with necessary data required to pass to the API via POST
    const data = {
      appointment: {
        appointmentTime: '2020-09-16T15:47:58.673Z',
        appointmentType: 'TESTTYPE',
        description: 'TEST',
        dateCreated: '2020-09-16T15:47:58.673Z'
      },
      user: {
        username: 'Prinkin'
      },
      worker: {
        id: 7
      }
    };

    //Set the headers required for the API request
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      }
    };
    console.log('you clicked the button...i hope');
    //Make the axios POST request, using the data object created earlier, and the headers.
    const response = await axios.post('http://localhost:8080/api/booking/create', JSON.stringify(data), options);

    console.log(response);
    return response;
  }, []);

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
          width="80vh"
          label="Select a Service"
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
                    label="Select your preferred worker"
                    onChange={setWorkerValue}
                    options={workers}
                    placeholder="Select your desired worker..."
                    value={workerValue}
                    paddingBottom="20px"
                  />
                  <SelectMenuField
                    width="100%"
                    paddingBottom="10px"
                    label="Available Times"
                    onChange={setValue}
                    options={availability}
                    placeholder="Select a day to book your appointment..."
                    value={value}
                  />
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
