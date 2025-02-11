import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, InputField, PageContent, FieldStack } from 'bumbag';
import { Formik } from 'formik';
import axios from 'axios';

import useUser from '../../hooks/useUser';

export default function Login() {
  const { setUser } = useUser();

  const history = useHistory();

  return (
    <PageContent breakpoint="mobile">
      <Heading textAlign="center">Login</Heading>

      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post('http://localhost:8080/login', {
              username: values.username,
              password: values.password
            })
            .then(res => {
              console.log(res);
              console.log(res.data);

              if (res && res.data) {
                if (res.data.success === true) {
                  const user = {
                    loggedIn: true,
                    username: values.username,
                    token: res.data.token
                  };
                  localStorage.setItem('authorization', res.data.token);
                  setUser(user);
                  history.push('/dashboard');
                }
              }
            });

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form name="loginForm" id="loginForm" onSubmit={handleSubmit}>
            <FieldStack>
              <Box>
                <InputField
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.username && 'danger'}
                />
                <Box color="danger" fontWeight="semibold">
                  {errors.username && touched.username && errors.username}
                </Box>
              </Box>
              <Box>
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.password && 'danger'}
                />
                <Box color="danger" fontWeight="semibold">
                  {errors.password && touched.password && errors.password}
                </Box>
              </Box>
              <Button width="100%" type="submit" palette="primary" onSubmit={handleSubmit} disabled={isSubmitting}>
                Submit
              </Button>
            </FieldStack>
          </form>
        )}
      </Formik>
    </PageContent>
  );
}
