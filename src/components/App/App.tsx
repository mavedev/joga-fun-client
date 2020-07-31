import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { store } from 'store';
import Preloader from 'components/Preloading';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import NewPostView from 'views/NewPostView/NewPostView';

import 'styles/App/App.scss';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Preloader>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={HomeView} />
            <Route path='/login' exact component={LoginView} />
            <Route path='/manage' exact component={NewPostView} />
          </Switch>
        </div>
      </Router>
    </Preloader>
  </Provider>
);

export default App;
