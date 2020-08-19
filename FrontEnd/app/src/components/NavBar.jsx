import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (          
        <div id = "navbarDiv">
          <ul id = "nav">
            <li><a href = "#">Home</a></li>
            <li><a href = "#">About us</a></li>
            <li><a href = "#">FAQ</a></li>
            <li><a href = "#">Contact</a></li>
          </ul>
      </div>
    );
  }
}
 
export default NavBar;