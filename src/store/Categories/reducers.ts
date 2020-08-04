import {
  SET_CATEGORIES,
  MANAGE_SET_CURRENT_CATEGORY,
  FILTER_SET_CURRENT_CATEGORY,
  CategoriesState,
  CategoriesActionType
} from './types';

const initialState: CategoriesState = {
  categories: [],
  manageCurrentCategory: '',
  filterCurrentCategory: null
};

export const categoriesChooserReducer = (
  state: CategoriesState = initialState,
  action: CategoriesActionType
): CategoriesState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.payload,
        manageCurrentCategory: state.manageCurrentCategory,
        filterCurrentCategory: state.filterCurrentCategory
      };
    case MANAGE_SET_CURRENT_CATEGORY:
      return {
        categories: state.categories,
        manageCurrentCategory: action.payload,
        filterCurrentCategory: state.filterCurrentCategory
      };
    case FILTER_SET_CURRENT_CATEGORY:
      return {
        categories: state.categories,
        manageCurrentCategory: state.manageCurrentCategory,
        filterCurrentCategory: action.payload
      };
    default:
      return state;
  }
};
