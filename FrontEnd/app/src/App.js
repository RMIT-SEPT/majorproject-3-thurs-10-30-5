import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayoutWrapper from './components/Layout/MainLayoutWrapper';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AboutUs from './components/AboutUs.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <main>
      <MainLayoutWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/*<Route component = {error}/>*/}
        </Switch>
      </MainLayoutWrapper>
    </main>
  );
}

export default App;
