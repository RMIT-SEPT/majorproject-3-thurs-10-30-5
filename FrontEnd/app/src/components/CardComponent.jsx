import React from 'react';
import { Box, Card, Button, Image } from 'bumbag';

function CardComponent({ name, button, description }) {
  return (
    <Card
      height="320px"
      title={name}
      footer={
        <Button width="150px" palette="primary">
          {button}
        </Button>
      }
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
