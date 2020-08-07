import React, { Suspense } from 'react';
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
import SuspenseView from 'views/SuspenseView';
import NewPostViewConatainer from 'views/NewPostView';

import 'styles/App/App.scss';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Preloader>
      <Suspense fallback={<SuspenseView />}>
        <Router>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={HomeView} />
              <Route path='/login' exact component={LoginView} />
              <Route path='/manage' exact component={NewPostViewConatainer} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </Preloader>
  </Provider>
);

export default App;
