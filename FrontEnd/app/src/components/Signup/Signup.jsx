import React from 'react';
import { SelectMenuField, Button, Heading, InputField, PageContent, FieldStack, Box, Alert } from 'bumbag';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import api from '../../services/api.jsx';
import axios from 'axios';
// import { SelectMenuField } from 'bumbag/ts/SelectMenu/styles';

function Signup() {
  const [value, setValue] = React.useState();
  const history = useHistory();

  return (
    <PageContent breakpoint="mobile" paddingBottom="50px">
      <Heading textAlign="center">Signup</Heading>
      <Formik
        initialValues={{ username: '', password: '', email: '', firstname: '', lastname: '', phone: '', address: '' }}
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
          if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          if (!values.address) {
            errors.address = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = {
            username: values.username,
            password: values.password,

            userDetails: {
              firstName: values.firstname,
              lastName: values.lastname,
              email: values.email,

              phoneNumber: values.phone,
              address: values.address
            },

            role: {
              role: value.value
            }
          };
          //console.log({ data });
          //api.register(data);
          console.log('Data: ', data);
          axios.post('http://localhost:8080/api/registration', data).then(res => {
            if (res && res.data) {
              history.push('/login');
            } else {
              window.alert('Oops! something went wrong with the registration. please refresh the page and try again');
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
            <FieldStack paddingBottom="150px">
              <FieldStack orientation="horizontal">
                <InputField
                  label="First Name"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.firstname && 'danger'}
                />

                <InputField
                  label="Last Name"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.lastname && 'danger'}
                />
              </FieldStack>
              <Box color="danger" fontWeight="semibold">
                {errors.lastname && touched.lastname && errors.lastname}
              </Box>

              <Box color="danger" fontWeight="semibold">
                {errors.firstname && touched.firstname && errors.firstname}
              </Box>
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

              <Box>
                <InputField
                  name="address"
                  label="Address"
                  type="text"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.address && 'danger'}
                />
                <Box color="danger" fontWeight="semibold">
                  {errors.address && touched.address && errors.address}
                </Box>
              </Box>

              <Box>
                <InputField
                  name="phone"
                  label="Phone"
                  type="number"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  state={errors.phone && 'danger'}
                />
                <Box color="danger" fontWeight="semibold">
                  {errors.phone && touched.phone && errors.phone}
                </Box>
              </Box>

              <SelectMenuField
                label="Account Type"
                onChange={setValue}
                options={[
                  { key: 1, label: 'Customer', value: 'Customer' },
                  { key: 2, label: 'Administrator', value: 'Admin' },
                  { key: 3, label: 'Worker', value: 'Worker' }
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
