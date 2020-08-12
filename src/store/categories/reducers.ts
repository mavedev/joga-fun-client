import {
  SET_CATEGORIES,
  MANAGE_SET_CURRENT_CATEGORY,
  FILTER_SET_CURRENT_CATEGORY,
  CategoriesState,
  CategoriesActionType
} from './types';

const initialState: CategoriesState = {
  categoriesList: [],
  currentManagedCategory: '',
  currentFilteredCategory: null
};

export const categoriesChooserReducer = (
  state: CategoriesState = initialState,
  action: CategoriesActionType
): CategoriesState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload
      };
    case MANAGE_SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentManagedCategory: action.payload
      };
    case FILTER_SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentFilteredCategory: action.payload
      };
    default:
      return state;
  }
};
