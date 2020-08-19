import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <div class="hero">
          <img id = 'heroImage' src="https://www.securityroundtable.org/wp-content/uploads/2017/08/AdobeStock_105389989.jpeg"/>     
          <h2><span>Software Engineering Processes and Tools Team 5</span></h2>
          <h3><span>Welcome to the basic homepage for the SEPT Team 5.</span></h3>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
