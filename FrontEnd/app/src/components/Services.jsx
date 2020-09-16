import React from 'react';
import { Box, Button, Heading, PageContent, Card, FieldStack, SelectMenuField, Alert } from 'bumbag';
import * as Loads from 'react-loads';
import api from '../services/api.jsx';
import axios from 'axios';

export default function Services() {
  // Get the services via a GET request and store them in a variable called services
  const getServices = React.useCallback(async () => {
    const response = await axios.get('http://localhost:8080/api/public/business');
    return response.data;
  }, []);

  //use react Loads to complete the promise and store the data
  const servicesRecord = Loads.useLoads('services', getServices);
  const services = servicesRecord.response || [];

  /*
  Change the key values within the array, so it can be placed directly within the <Select> element (the select element requires an array of objects which 
  contain a value and a label)
  */
  const serviceList = services.map(({ id: value, name: label, ...rest }) => ({ value, label, ...rest }));

  //The value for the select service dropdown
  const [serviceValue, setServiceValue] = React.useState();

  const [value, setValue] = React.useState();

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
              <Card.Title margin="auto">{}</Card.Title>
            </Card.Header>
            <Card.Content textAlign="center">
              Test Description
              <Heading use="h4" textAlign="center" paddingBottom="20px" paddingTop="20px">
                Book your appointment now!
              </Heading>
              <FieldStack orientation="horizontal" paddingBottom="20px">
                <SelectMenuField
                  width="80vh"
                  label="Hours"
                  onChange={setValue}
                  options={[
                    { key: 1, label: '1', value: '1' },
                    { key: 2, label: '2', value: '2' },
                    { key: 3, label: '3', value: '3' },
                    { key: 4, label: '4', value: '4' }
                  ]}
                  placeholder="Select an hour..."
                  value={value}
                />
                <SelectMenuField
                  width="80vh"
                  label="minutes"
                  onChange={setValue}
                  options={[
                    { key: 1, label: '00', value: '00' },
                    { key: 2, label: '15', value: '15' },
                    { key: 3, label: '30', value: '30' },
                    { key: 4, label: '45', value: '45' }
                  ]}
                  placeholder="Select a minute..."
                  value={value}
                />
              </FieldStack>
              <SelectMenuField
                width="100%"
                label="Select your preferred worker"
                onChange={setValue}
                options={[
                  { key: 1, label: 'bob', value: 'bob' },
                  { key: 2, label: 'greg', value: 'greg' },
                  { key: 3, label: 'dan', value: 'dan' },
                  { key: 4, label: 'sam', value: 'sam' }
                ]}
                placeholder="Select your desired worker..."
                value={value}
              />
            </Card.Content>
            <Card.Footer>
              <Button palette="primary" width="100%" margin="auto">
                Book Now!
              </Button>
            </Card.Footer>
          </Card>
        </Box>
      </PageContent>
    </Box>
  );
}
