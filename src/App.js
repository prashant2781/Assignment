import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
