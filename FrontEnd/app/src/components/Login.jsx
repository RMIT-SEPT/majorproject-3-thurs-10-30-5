import React from 'react';

export default function Login() {
  return (
    <div id="loginPage">
      <img id="loginImage" src="https://picalls.com/wp-content/uploads/2015/05/Skive-by-LunarPixel.jpg" />

      <div id="loginDiv">
        <h1>Login</h1>
        <form id="loginForm">
          <label>
            Username <br />
            <input type="text" />
          </label>
          <br />

          <label>
            Password <br />
            <input type="password" />
          </label>
          <br />
          <br />

          <button id="loginButton" type="submit">
            {' '}
            Login{' '}
          </button>
        </form>
      </div>
    </div>
  );
}
