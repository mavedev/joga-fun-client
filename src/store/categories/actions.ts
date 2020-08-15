import {
  SET_CATEGORIES,
  ADD_CATEGORY,
  MANAGE_SET_CURRENT_CATEGORY,
  FILTER_SET_CURRENT_CATEGORY,
  CategoriesActionType
} from './types';

type CAType = CategoriesActionType;

export const createSetCategories = (categories: string[]): CAType => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const createAddCategory = (category: string): CAType => ({
  type: ADD_CATEGORY,
  payload: category
});

export const createSetCurrentManagedCategory = (category: string): CAType => ({
  type: MANAGE_SET_CURRENT_CATEGORY,
  payload: category
});

export const createSetCurrentFilteredCategory = (category: string | null): CAType => ({
  type: FILTER_SET_CURRENT_CATEGORY,
  payload: category
});
