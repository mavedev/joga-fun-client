import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { store } from 'store';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SuspenseView from 'pages/SuspensePage';

import NewPostViewConatainer from 'pages/NewPostPage';
import PostViewContainer from 'pages/PostPage';
import Preloader from './Preloading';

import 'styles/App/App.scss';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Preloader>
      <Suspense fallback={<SuspenseView />}>
        <HashRouter>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/login' exact component={LoginPage} />
              <Route path='/manage' exact component={NewPostViewConatainer} />
              <Route path='/post/:postID' component={PostViewContainer} />
            </Switch>
          </div>
        </HashRouter>
      </Suspense>
    </Preloader>
  </Provider>
);

export default App;
