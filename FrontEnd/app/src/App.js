import React from 'react';
import { Route } from 'react-router-dom';

import MainLayoutWrapper from './components/Layout/MainLayoutWrapper';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <main>
      <MainLayoutWrapper>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/*<Route component = {error}/>*/}
        </switch>
      </MainLayoutWrapper>
    </main>
  );
}

export default App;
