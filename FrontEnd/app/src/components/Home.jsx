import React from 'react';
import { PageContent, Heading } from 'bumbag';

export default function Home() {
  return (
    <PageContent
      minHeight="100vh"
      minWidth="100vh"
      paddingTop="10%"
      textAlign="center"
      color = "white"
      wrapperProps={{ backgroundImage: "url('/images/hero-image.jpeg')" }}
    >
      <Heading use="h2" style={{background: "rgba(0, 0, 0, 0.4)", fontWeight: "normal", padding: "20px"}}>
        Software Engineering Processes and Tools Team 5
      </Heading>
      <Heading use="h4" style={{background: "rgba(0, 0, 0, 0.4)", fontWeight: "normal", padding: "20px", width: "85%", margin: "auto"}}>
        Welcome to the basic homepage for the SEPT Team 5.
      </Heading>
    </PageContent>
  );
}
