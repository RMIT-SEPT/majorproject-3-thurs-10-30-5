import React from 'react';
import "@testing-library/jest-dom/dist/extend-expect";
import "@testing-library/jest-dom/dist/to-have-text-content";
import { render, fireEvent, cleanup, waitForElement, act } from '../../../Utils/TestUtils.jsx';
import Login from '../Login.jsx';

//RAYMOND'S TESTS
//-----------------------------------------------------------------------------
//cleanup after each test
afterEach(cleanup);

//test if the login page renders without crashing the website
test('Renders without crashing the website', () => {
    expect(() => render(<Login />)).not.toThrowError();
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

//-----------------------------------------------------------------------------