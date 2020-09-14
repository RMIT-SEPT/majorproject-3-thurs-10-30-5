import React from 'react';
import { Box, Button, Heading, InputField, PageContent, SelectMenu, Card } from 'bumbag';
import Service from './Service.jsx';

export default function Services() {
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
      marginBottom="20%"
    >
      <PageContent paddingBottom="100px">
        <Heading textAlign="center"> Services </Heading>
        <SelectMenu
          paddingBottom="50px"
          width="78vh"
          onChange={setValue}
          options={[
            { key: 1, label: 'Hairdresser', value: 'Hairdresser' },
            { key: 2, label: 'Salon', value: 'Salon' },
            { key: 3, label: 'Ride-Sharing Service', value: 'Ride-Sharing Service' },
            { key: 4, label: 'Babysitting Service', value: 'Babysitting Service' }
          ]}
          placeholder="Select a service..."
          value={value}
        />

        <Service
          title="Test Title"
          description="This is someones service. More words and other words. 
          This card will should only appear once a service is selected from the drop down"
          width="100%"
          margin="10%"
        />
      </PageContent>
    </Box>
  );
}
