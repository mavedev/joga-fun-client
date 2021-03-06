import thunkMiddlware, { ThunkMiddleware } from 'redux-thunk';
import {
  combineReducers, createStore, applyMiddleware, compose
} from 'redux';

import { categoriesChooserReducer } from './categories/reducers';
import { loginReducer } from './auth/reducers';
import { postsReducer } from './posts/reducers';
import { localesReducer } from './locales/reducers';
import { AppActionType } from './types';

const rootReducer = combineReducers({
  categories: categoriesChooserReducer,
  locales: localesReducer,
  posts: postsReducer,
  auth: loginReducer
});

const composeEnhancers = (window as any)
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddlware as ThunkMiddleware<AppState, AppActionType>
  ))
);

export * from './categories/actions';
export * from './auth/actions';
export * from './posts/actions';
export * from './locales/action';
export * from './types';
