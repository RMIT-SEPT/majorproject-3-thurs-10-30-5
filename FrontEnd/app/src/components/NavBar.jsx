import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div id="navbarDiv">
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>

        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
