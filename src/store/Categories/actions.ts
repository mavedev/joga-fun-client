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

export const createManageSetCurrentCategory = (category: string): CAType => ({
  type: MANAGE_SET_CURRENT_CATEGORY,
  payload: category
});

export const createFilterSetCurrentCategory = (category: string): CAType => ({
  type: FILTER_SET_CURRENT_CATEGORY,
  payload: category
});
