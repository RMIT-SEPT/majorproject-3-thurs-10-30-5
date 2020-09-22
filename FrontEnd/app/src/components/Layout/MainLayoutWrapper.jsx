import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, PageWithHeader, PageContent, Text, Container, TopNav, Button, Flex, Paragraph, Link, List } from 'bumbag';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import useUser from '../../hooks/useUser';

function MainLayoutWrapper({ children }) {
  const { user, setUser } = useUser();

  const history = useHistory();

  function handleLogOut() {
    setUser({});
    history.push('/login');
  }

  const Header = () => (
    <TopNav>
      <TopNav.Section marginLeft="major-2">
        <TopNav.Item use={RouterLink} to="/">
          Home
        </TopNav.Item>
        {user.loggedIn && (
          <TopNav.Item marginLeft="major-2" use={RouterLink} to="/dashboard">
            Dashboard
          </TopNav.Item>
        )}
        <TopNav.Item marginLeft="major-2" use={RouterLink} to="/aboutus">
          About Us
        </TopNav.Item>
        <TopNav.Item marginLeft="major-2" use={RouterLink} to="/">
          FAQ
        </TopNav.Item>
        <TopNav.Item marginLeft="major-2" use={RouterLink} to="/contactus">
          Contact
        </TopNav.Item>
      </TopNav.Section>

      {/* Only display the signup and login buttons if the user isnt logged in */}

      <TopNav.Section marginRight="major-2">
        {user.loggedIn ? (
          <React.Fragment>
            <TopNav.Item>
              <Button onClick={handleLogOut} textDecoration="none" variant="ghost" palette="primary">
                Log out
              </Button>
            </TopNav.Item>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TopNav.Item>
              <Button use={RouterLink} to="/signup" textDecoration="none" variant="ghost" palette="primary">
                Sign up
              </Button>
            </TopNav.Item>
            <TopNav.Item>
              <Button palette="primary" textDecoration="none" use={RouterLink} to="/login">
                Login
              </Button>
            </TopNav.Item>
          </React.Fragment>
        )}
      </TopNav.Section>
    </TopNav>
  );

  const Footer = () => (
    <PageContent
      padding="major-2"
      breakpoint="desktop"
      wrapperProps={{
        backgroundColor: 'black',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        display: 'flex'
      }}
      color="white"
    >
      <Flex justifyContent="space-between" width="100%">
        <Box>
          <Text fontWeight="semibold">Contact us!</Text>
          <Box marginTop="major-1">
            <Paragraph>Phone: 0787 872837 1023989</Paragraph>
            <Paragraph>Email: placeholder@placeholder.com</Paragraph>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="semibold">Explore</Text>
          <List listStylePosition="inside" marginTop="major-1">
            <List.Item display="block" use={Link}>
              Home
            </List.Item>
            <List.Item display="block" use={Link}>
              About us
            </List.Item>
            <List.Item display="block" use={Link}>
              FAQ
            </List.Item>
            <List.Item display="block" use={Link}>
              Contact
            </List.Item>
          </List>
        </Box>
        <Box>
          <Text fontWeight="semibold">Team Members</Text>
          <List listStylePosition="inside" marginTop="major-1">
            <List.Item>MATIC, Marcus (s3703981)</List.Item>
            <List.Item>CAUCCI, Raymond (s3779722)</List.Item>
            <List.Item>WESTON, Michael (s3541742)</List.Item>
            <List.Item>NADALIN, Marco (s3782230)</List.Item>
            <List.Item>PAPAHARISIS, Athanasios (s3372134)</List.Item>
          </List>
        </Box>
      </Flex>
    </PageContent>
  );

  return (
    <PageWithHeader sticky header={<Header />}>
      <Box minHeight="70vh">{children}</Box>
      <Footer />
    </PageWithHeader>
  );
}

MainLayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayoutWrapper;
