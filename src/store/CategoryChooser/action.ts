import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  CategoriesActionType
} from './types';

type CAType = CategoriesActionType;

export const setCategories = (categories: string[]): CAType => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const setCurrentCategory = (category: string): CAType => ({
  type: SET_CURRENT_CATEGORY,
  payload: category
});
