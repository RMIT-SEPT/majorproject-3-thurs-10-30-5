import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Button, Heading, SelectMenu, FieldStack, SelectMenuField } from 'bumbag';

function Service({ title, description }) {
  const [value, setValue] = React.useState();
  return (
    <Box>
      <Card standalone>
        <Card.Header>
          <Card.Title margin="auto">{title}</Card.Title>
        </Card.Header>
        <Card.Content textAlign="center">
          {description}

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
  );
}

export default Service;
