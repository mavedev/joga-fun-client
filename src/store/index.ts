import { combineReducers, createStore } from 'redux';
import { categoriesChooserReducer } from './CategoryChooser/reducers';

const rootReducer = combineReducers({
  categoryChooser: categoriesChooserReducer
});

export type AppStore = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
