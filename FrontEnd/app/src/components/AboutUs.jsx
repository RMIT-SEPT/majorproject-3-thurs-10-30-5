import React from 'react';
import { Button, Paragraph , Heading, PageContent } from 'bumbag';
import { Link as RouterLink } from 'react-router-dom';

export default function AboutUs() {
  return (
    <React.Fragment>
      <PageContent
        minHeight="100%"
        minWidth="100vh"
        textAlign="center"
        wrapperProps={{ backgroundImage: "url('/images/adweek-email-marketing-stock-photos.jpg')" }}
      >
        <Heading textAlign="center" color="white" style={{background: "rgba(0, 0, 0, 0.4)", fontWeight: "normal", padding: " 100px"}}>ABOUT US</Heading>
      </PageContent>
      <PageContent 
        alignContent="center"
        paddingBottom="350px">
          <Heading textAlign="center" fontWeight= "normal">OUR MISSION</Heading>
          <hr/>
          <br/>
          <Paragraph textAlign="center">Our mission, as a team and family, is to complete our task.  
            We are consistently trying to strive to achieve our vision for the community's sake. 
            In doing this, we will deliver excellence in every aspect of our website and meet the expectations of the many.
            Now, meet the team!
          </Paragraph>
          <br/><br/>

          <Heading textAlign="center" fontSize ="400" style={{fontWeight: "normal"}}>MEET THE TEAM!</Heading>
          <hr width="70%"/>
          
          <Paragraph textAlign="center">
            <b>Your project manager:</b> Athanasios Papaharisis (s3372134)
          </Paragraph>
          
          <Paragraph textAlign="center">
            <b>Your front end developers:</b> Raymond Caucci (s3779722) and Marco Nadalin (s3782230)
          </Paragraph>
          
          <Paragraph textAlign="center">
          <b>Your back end devlopers:</b> Michael Weston (s3541742) and Marcus Matic (s3703981)
          </Paragraph>

          <Paragraph textAlign="center">
            You can contact us here!
          </Paragraph>

          <Button marginRight="40%" marginLeft="42%" palette="primary" variant="outlined" use={RouterLink} to="/contactus">
            Contact Us
          </Button>
        </PageContent>
    </React.Fragment>
  );
}
