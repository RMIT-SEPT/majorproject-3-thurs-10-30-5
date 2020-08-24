import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
    return (          
        <div id = "navbarDiv">
          <ul id = "nav">
            <li><Link to = "/">Home</Link></li>
            <li><a href = "#">About us</a></li>
            <li><a href = "#">FAQ</a></li>
            <li><a href = "#">Contact</a></li>
            <li><a href = "/login">Login</a></li>

            <li><Link to = "/test">Test</Link></li>

            </ul>
      </div>
    );
}
 
export default NavBar;