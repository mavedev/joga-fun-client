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
        categoriesList: action.payload,
        currentManagedCategory: state.currentManagedCategory,
        currentFilteredCategory: state.currentFilteredCategory
      };
    case MANAGE_SET_CURRENT_CATEGORY:
      return {
        categoriesList: state.categoriesList,
        currentManagedCategory: action.payload,
        currentFilteredCategory: state.currentFilteredCategory
      };
    case FILTER_SET_CURRENT_CATEGORY:
      return {
        categoriesList: state.categoriesList,
        currentManagedCategory: state.currentManagedCategory,
        currentFilteredCategory: action.payload
      };
    default:
      return state;
  }
};
