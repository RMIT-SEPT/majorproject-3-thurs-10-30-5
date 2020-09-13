import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, InputField, PageContent, FieldStack } from 'bumbag';

import useUser from '../hooks/useUser';

import api from '../services/api.jsx';

export default function Login2() {
  const [formData, setFormData] = React.useState({ username: '', password: '', usernameError: '', passwordError: '' });
  const { setUser } = useUser();

  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({ username: formData.username, password: formData.password, email: formData.email });
    console.log({ data });
    api.login({ username: formData.username, password: formData.password });

    const user = {
      loggedIn: true,
      username: formData.username
    };

    setUser(user);

    history.push('/dashboard');
  }

  return (
    <PageContent breakpoint="mobile">
      <Heading textAlign="center">Login</Heading>

      <form name="loginForm" id="loginForm" onSubmit={handleSubmit}>
        <FieldStack>
          <Box>
            <InputField
              label="Username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <InputField
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <Box color="danger" fontWeight="semibold" />
          </Box>
          <Button width="100%" type="submit" palette="primary" onSubmit={handleSubmit}>
            Submit
          </Button>
        </FieldStack>
      </form>
    </PageContent>
  );
}
