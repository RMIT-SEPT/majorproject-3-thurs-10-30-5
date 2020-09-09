import React from 'react';
import { PageContent, Heading } from 'bumbag';

export default function Home() {
  return (
    <PageContent
      minHeight="100vh"
      textAlign="center"
      wrapperProps={{ backgroundImage: "url('/images/hero-image.jpeg')" }}
    >
      <Heading use="h2">Software Engineering Processes and Tools Team 5</Heading>
      <Heading use="h3">Welcome to the basic homepage for the SEPT Team 5.</Heading>
    </PageContent>
  );
}
