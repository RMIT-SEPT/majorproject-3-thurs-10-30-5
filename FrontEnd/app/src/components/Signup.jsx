import React from 'react';
import { Box, Button, Heading, InputField, PageContent, FieldStack } from 'bumbag';
import api from '../services/api.jsx';

function Signup() {
  const [formData, setFormData] = React.useState({ username: '', password: '', email: '' });

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({ username: formData.username, password: formData.password, email: formData.email });
    console.log({ data });
    api.register({ data });
  }

  return (
    <PageContent breakpoint="mobile">
      <Heading textAlign="center">Signup</Heading>

      <form onSubmit={onSubmit}>
        <FieldStack>
          <FieldStack orientation="horizontal">
            <InputField name="firstName" placeholder="First Name" label="First name" />
            <InputField name="lastName" placeholder="First Name" label="Last name" />
          </FieldStack>

          <InputField
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={onChange}
          />

          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
          />

          <InputField name="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm Password" />

          <InputField
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
          />

          <Button width="100%" type="submit" palette="primary">
            Submit
          </Button>
        </FieldStack>
      </form>
    </PageContent>
  );
}

export default Signup;
