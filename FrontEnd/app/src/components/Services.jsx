import React from 'react';
import { Box, Button, Heading, InputField, PageContent, SelectMenu } from 'bumbag';

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
    >
      <PageContent>
        <Heading textAlign="center"> Services </Heading>
        <SelectMenu
          width="80vh"
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
      </PageContent>
    </Box>
  );
}
