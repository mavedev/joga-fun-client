import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from 'views/Home';
import Login from 'views/Login';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/manage' exact component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
