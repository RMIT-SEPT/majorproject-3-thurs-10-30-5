import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Button, Image } from 'bumbag';

function CardComponent({ name, button, description, buttonlink }) {
  return (
    <Card
      textAlign="center"
      alignContent="center"
      height="320px"
      title={name}
      footer={
        <Button width="150px" palette="primary" textAlign="center">
          {button}
        </Button>
      }
      data-testid="card-test"
    >
      <Image
        maxWidth="180px"
        src="https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
      />
      <Box>{description}</Box>
    </Card>
  );
}

export default CardComponent;
