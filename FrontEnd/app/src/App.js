import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
