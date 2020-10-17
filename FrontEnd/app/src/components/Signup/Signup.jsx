import React from 'react';
import { SelectMenuField, Button, Heading, InputField, PageContent, FieldStack, Box } from 'bumbag';
import { Formik } from 'formik';
import api from '../../services/api.jsx';
// import { SelectMenuField } from 'bumbag/ts/SelectMenu/styles';

function Signup() {
  const [value, setValue] = React.useState();
  return (
    <PageContent breakpoint="mobile">
      <Heading textAlign="center">Signup</Heading>
      <Formik
        initialValues={{ username: '', password: '', email: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = JSON.stringify({ username: values.username, password: values.password, email: values.email });
          console.log({ data });
          api.register(data);
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

              <Box>
                <InputField
                  name="email"
                  label="Email"
                  type="text"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.email && 'danger'}
                />
                <Box color="danger" fontWeight="semibold">
                  {errors.email && touched.email && errors.email}
                </Box>
              </Box>

              <SelectMenuField
                label="Account Type"
                onChange={setValue}
                options={[
                  { key: 1, label: 'Customer', value: 'c' },
                  { key: 2, label: 'Administrator', value: 'a' }
                ]}
                value={value}
              />

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

export default Signup;
