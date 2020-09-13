import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Button, Heading, InputField, PageContent, FieldStack } from 'bumbag';

import api from '../services/api';

const defaultState = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: ''
};

class Login extends Component {
  state = defaultState;

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value
    });
  };

  validate = () => {
    let usernameError = '';
    let passwordError = '';

    if (this.state.username == '' || !this.state.username) {
      usernameError = 'Username cannot be blank';
    }

    if (usernameError) {
      this.setState({ usernameError });
      return false;
    }

    if (!this.state.password) {
      passwordError = 'Password cannot be blank';
    }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = async (event, data) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      let username = this.state.username;
      let password = this.state.password;

      const response = await api.login({ username, password });
      api.setIsLoggedIn(true);

      console.log(localStorage.getItem('username'));

      this.setState({ ...defaultState, redirect: true });
      console.log('HERE');
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <PageContent breakpoint="mobile">
        <Heading textAlign="center">Login</Heading>

        <form name="loginForm" id="loginForm" onSubmit={this.handleSubmit}>
          <FieldStack>
            <Box>
              <InputField
                label="Username"
                name="username"
                placeholder="Enter your username"
                value={this.state.name}
                onChange={this.handleChange}
                state={this.state.usernameError && 'danger'}
              />
              {this.state.usernameError ? (
                <Box color="danger" fontWeight="semibold">
                  {this.state.usernameError}
                </Box>
              ) : null}
            </Box>
            <Box>
              <InputField
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
                state={this.state.passwordError && 'danger'}
              />
              {this.state.passwordError ? (
                <Box color="danger" fontWeight="semibold">
                  {this.state.passwordError}
                </Box>
              ) : null}
            </Box>
            <Button width="100%" type="submit" palette="primary" onSubmit={this.handleSubmit}>
              Submit
            </Button>
          </FieldStack>
        </form>
      </PageContent>
    );
  }
}

export default Login;
