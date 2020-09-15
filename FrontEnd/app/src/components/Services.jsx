import React from 'react';
import {
  Box,
  Button,
  Heading,
  InputField,
  PageContent,
  SelectMenu,
  Card,
  FieldStack,
  SelectMenuField,
  Alert,
  Select
} from 'bumbag';
import * as Loads from 'react-loads';
import api from '../services/api.jsx';
import axios from 'axios';

export default function Services() {
  // Get the services via a GET request and store them in a variable called services
  const getServices = React.useCallback(async () => {
    const response = await axios.get('http://localhost:8080/api/public/business');
    return response.data;
  }, []);

  const servicesRecord = Loads.useLoads('services', getServices);
  const services = servicesRecord.response || [];

  const service1 = { label: 'test1', value: 'sunny' };
  const service2 = { label: 'test2', value: 'rainy' };

  const testservices = [service1, service2];

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
          onChange={setValue}
          options={testservices}
          placeholder="Select a Service"
          value={value}
        />
      </PageContent>

      <PageContent>
        <Box>
          <Card standalone>
            <Card.Header>
              <Card.Title margin="auto">Title</Card.Title>
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
