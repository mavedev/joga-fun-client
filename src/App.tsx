import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import NewPostView from 'views/NewPostView';
import './App.scss';

const App = () => (
  <Router>
    <div className='App'>
      <Switch>
        <Route path='/' exact component={HomeView} />
        <Route path='/login' exact component={LoginView} />
        <Route path='/manage' exact component={NewPostView} />
      </Switch>
    </div>
  </Router>
);

export default App;
