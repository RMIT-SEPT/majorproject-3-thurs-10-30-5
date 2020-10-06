import React from 'react';
import { Button, Paragraph, Heading, PageContent } from 'bumbag';
import { Link as RouterLink } from 'react-router-dom';

export default function AboutUs() {
  return (
    <React.Fragment>
      <PageContent
        minHeight="100%"
        minWidth="100vh"
        textAlign="center"
        wrapperProps={{ backgroundImage: "url('/images/adweek-email-marketing-stock-photos.jpg')", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
        <Heading
          textAlign="center"
          color="black"
          style={{ background: 'rgba(255, 255, 255, 0.8)', fontSize:'75px', fontWeight: 'lighter', padding: ' 100px' }}>
          About Us
          <br/><br/>
          <Paragraph textAlign="center" fontStyle="italic">
              Since 2020, our objective has been to get work done.
          </Paragraph>
        </Heading>
      </PageContent>

      <PageContent textAlign="center" paddingBottom="100px">  
        <br/>
        <Paragraph textAlign = "left" paddingLeft="18%" paddingRight="18%">
          Our mission, as a team and family, is to complete our task. We are consistently trying to strive to achieve
          our vision for the community's sake. In doing this, we will deliver excellence in every aspect of our website
          and meet the expectations of the many. 
        </Paragraph>
            

        <br/>
        <Heading textAlign="center" fontSize="400" style={{ fontWeight: 'normal' }}>
          MEET THE TEAM!
        </Heading>
        <hr width="100%" /><br/>
        <Paragraph textAlign="center">
          Your project manager: Athanasios Papaharisis (s3372134)
        </Paragraph>
        <Paragraph textAlign="center">
          Your front end developers: Raymond Caucci (s3779722) and Marco Nadalin (s3782230)
        </Paragraph>
        <Paragraph textAlign="center">
          Your back end developers: Michael Weston (s3541742) and Marcus Matic (s3703981)
        </Paragraph>
        <br/><br/>
      </PageContent>

    </React.Fragment>
  );
}
