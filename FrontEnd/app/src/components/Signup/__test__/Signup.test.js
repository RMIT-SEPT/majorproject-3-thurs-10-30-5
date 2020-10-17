import React from 'react';
import '@testing-library/jest-dom/dist/extend-expect';
import '@testing-library/jest-dom/dist/to-have-text-content';
import { render, fireEvent, cleanup, waitForElement, act } from '../../../Utils/TestUtils.jsx';
import Signup from '../Signup.jsx';

afterEach(cleanup);

/*
    Author: Marco
    Test: Makes sure the component can render without causing errors
*/
test('Component Renders successfully', () => {
  expect(() => render(<Signup />)).not.toThrowError();
});

/*
    Author: Marco
    Test: Makes sure the input fiels within the signup form can
            be changed by the user
*/
test('Input fields can be updated with user input', async () => {
  await act(async () => {
    const { getByLabelText } = render(<Signup />);

    let usernameInput = getByLabelText('Username');
    let passwordInput = getByLabelText('Password');
    let emailInput = getByLabelText('Email');

    fireEvent.change(usernameInput, {
      target: {
        value: 'usernametestinput'
      }
    });

    fireEvent.change(passwordInput, {
      target: {
        value: 'passwordtestinput'
      }
    });

    fireEvent.change(emailInput, {
      target: {
        value: 'emailtestinput'
      }
    });

    usernameInput = await waitForElement(() => getByLabelText('Username'));

    passwordInput = await waitForElement(() => getByLabelText('Password'));

    expect(usernameInput.value).toBe('usernametestinput');
    expect(passwordInput.value).toBe('passwordtestinput');
    expect(emailInput.value).toBe('emailtestinput');
  });
});

/*
    Author: Marco
    Test: makes sure the username validation error appears
*/
test('username validations function correctly', async () => {
  const { getByLabelText, findByText } = render(<Signup />);

  const usernameInput = getByLabelText('Username');
  fireEvent.blur(usernameInput);
  expect(await findByText(/required/i)).not.toBeNull();
});

/*
    Author: Marco
    Test: makes sure the password validation error appears
*/
test('password field required validation work', async () => {
  const { getByLabelText, findByText } = render(<Signup />);

  const passwordInput = getByLabelText('Password');
  fireEvent.blur(passwordInput);
  expect(await findByText(/required/i)).not.toBeNull();
});

/*
    Author: Marco
    Test: makes sure the email validation error appears
*/
test('email field required validation work', async () => {
  const { getByLabelText, findByText } = render(<Signup />);

  const emailInput = getByLabelText('Email');
  fireEvent.blur(emailInput);
  expect(await findByText(/required/i)).not.toBeNull();
});
