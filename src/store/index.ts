import thunkMiddlware, { ThunkMiddleware } from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { categoriesChooserReducer } from './CategoryChooser/reducers';
import { loginReducer } from './Auth/reducers';
import { AppActionType } from './types';

const rootReducer = combineReducers({
  categoryChooser: categoriesChooserReducer,
  auth: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddlware as ThunkMiddleware<AppState, AppActionType>)
);

export * from './CategoryChooser/actions';
