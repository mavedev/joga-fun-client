import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { store } from 'store';
import Preloader from 'components/Preloading';
import HomeView from 'pages/HomeView';
import LoginView from 'pages/LoginView';
import SuspenseView from 'pages/SuspenseView';
import NewPostViewConatainer from 'pages/NewPostView';

import 'styles/App/App.scss';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Preloader>
      <Suspense fallback={<SuspenseView />}>
        <HashRouter>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={HomeView} />
              <Route path='/login' exact component={LoginView} />
              <Route path='/manage' exact component={NewPostViewConatainer} />
            </Switch>
          </div>
        </HashRouter>
      </Suspense>
    </Preloader>
  </Provider>
);

export default App;
