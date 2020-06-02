import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from 'views/Home';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
