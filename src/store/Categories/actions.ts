import {
  SET_CATEGORIES,
  MANAGE_SET_CURRENT_CATEGORY,
  FILTER_SET_CURRENT_CATEGORY,
  CategoriesActionType
} from './types';

type CAType = CategoriesActionType;

export const createSetCategories = (categories: string[]): CAType => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const createSetCurrentManagedCategory = (category: string): CAType => ({
  type: MANAGE_SET_CURRENT_CATEGORY,
  payload: category
});

export const createSetCurrentFilteredCategory = (category: string): CAType => ({
  type: FILTER_SET_CURRENT_CATEGORY,
  payload: category
});
