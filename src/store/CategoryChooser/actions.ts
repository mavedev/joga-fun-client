import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  CategoriesActionType
} from './types';

type CAType = CategoriesActionType;

export const createSetCategories = (categories: string[]): CAType => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const createSetCurrentCategory = (category: string): CAType => ({
  type: SET_CURRENT_CATEGORY,
  payload: category
});
