import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

import './App.css';

function App() {
  return (
    <main>
      <div className="App">
        <NavBar />

        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/*<Route component = {error}/>*/}
        </switch>

        <Footer />
      </div>
    </main>
  );
}

export default App;
