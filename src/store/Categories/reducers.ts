import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  CategoriesState,
  CategoriesActionType
} from './types';

const initialState: CategoriesState = {
  categories: [],
  currentCategory: ''
};

export const categoriesChooserReducer = (
  state: CategoriesState = initialState,
  action: CategoriesActionType
): CategoriesState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.payload,
        currentCategory: state.currentCategory
      };
    case SET_CURRENT_CATEGORY:
      return {
        categories: state.categories,
        currentCategory: action.payload
      };
    default:
      return state;
  }
};
