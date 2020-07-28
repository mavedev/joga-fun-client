import thunkMiddlware, { ThunkMiddleware } from 'redux-thunk';
import {
  combineReducers, createStore, applyMiddleware, compose
} from 'redux';

import { categoriesChooserReducer } from './CategoryChooser/reducers';
import { loginReducer } from './Auth/reducers';
import { AppActionType } from './types';

const rootReducer = combineReducers({
  categoryChooser: categoriesChooserReducer,
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

export * from './CategoryChooser/actions';
export * from './Auth/actions';
