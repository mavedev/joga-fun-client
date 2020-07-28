import thunkMiddlware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { categoriesChooserReducer } from './CategoryChooser/reducers';
import { loginReducer } from './Auth/reducers';

const rootReducer = combineReducers({
  categoryChooser: categoriesChooserReducer,
  auth: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddlware));

export * from './CategoryChooser/actions';
