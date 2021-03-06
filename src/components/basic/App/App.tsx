import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { store } from 'store';
import HomePage from 'pages/HomePage';
import PostPage from 'pages/PostPage';
import LoginPage from 'pages/LoginPage';
import NewPostPage from 'pages/NewPostPage';
import SuspensePage from 'pages/SuspensePage';
import NotFoundPage from 'pages/NotFoundPage';
import Preloader from 'components/basic/Preloading';

import 'styles/vendors/extensions/bootstrap.scss';
import 'styles/vendors/extensions/quill.scss';
import 'styles/vendors/react-calendar.scss';
import 'styles/vendors/font-awesome.scss';

/** The main component of the app. */
const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Preloader>
      <Suspense fallback={<SuspensePage />}>
        <HashRouter>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/post/:postID' component={PostPage} />
              <Route path='/login' exact component={LoginPage} />
              <Route path='/manage' exact component={NewPostPage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </HashRouter>
      </Suspense>
    </Preloader>
  </Provider>
);

export default App;
