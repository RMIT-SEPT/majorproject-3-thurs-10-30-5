import React from 'react';
import "@testing-library/jest-dom/dist/extend-expect";
import "@testing-library/jest-dom/dist/to-have-text-content";
import { render, fireEvent, cleanup, waitForElement, act } from '../../../Utils/TestUtils.jsx';
import Login from '../Login.jsx';

//Author: CAUCCI, Raymond (s3779722)

//-----------------------------------------------------------------------------
//cleanup after each test
afterEach(cleanup);

//test if the login page renders without crashing the website
test('Renders without crashing the website', () => {
    expect(() => render(<Login />)).not.toThrowError();
});

//Test if the 'Required' red text shows up if nothing is entered for username
test('Username empty field validation successful', async () => {
  const { getByLabelText, findByText } = render(<Login />);
  fireEvent.blur(getByLabelText('Username'));

  expect(
    await findByText(/required/i)
    ).not.toBeNull();
});

//test if the login input fields respond and change when the user updates them
test('Input fields respond to input alteration accordingly', async () => {
    await act(async () => {
      const { getByLabelText } = render(<Login/>);

      let usernameInput = getByLabelText('Username');

      fireEvent.change(usernameInput, { target: 
            { 
                value: 'testusername' 
            } 
        });
  
      let passwordInput = getByLabelText('Password');

      fireEvent.change(passwordInput, { target: 
            { 
                value: 'testpassword'
            } 
        });
  
      usernameInput = await waitForElement(() => 
            getByLabelText('Username')
        );

      passwordInput = await waitForElement(() => 
            getByLabelText('Password')
        );
  
      expect(usernameInput.value).toBe('testusername');
      expect(passwordInput.value).toBe('testpassword');
    });
  });

//Test if the 'Required' red text shows up if nothing is entered for password
test('Password empty field validation successful', async () => {
  const { getByLabelText, findByText } = render(<Login />);
  fireEvent.blur(getByLabelText('Password'));

  expect(
    await findByText(/required/i)
    ).not.toBeNull();
});
//-----------------------------------------------------------------------------
