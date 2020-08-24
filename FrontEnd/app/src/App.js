import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';

import {Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <div className="App">

        <NavBar/>  

        <switch>
          <Route path = "/" component={Home} exact />
          <Route path = "/login" component={Login} exact/>
          {/*<Route component = {error}/>*/}
        </switch>

        <Footer/>

        </div>
    </main>
      );
}

export default App;
