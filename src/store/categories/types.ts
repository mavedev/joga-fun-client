export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const MANAGE_SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const FILTER_SET_CURRENT_CATEGORY = 'FILTER_SET_CURRENT_CATEGORY';

export type CategoriesState = {
  categoriesList: string[];
  currentManagedCategory: string;
  currentFilteredCategory: string | null;
};

type SetCategoriesActionType = {
  type: typeof SET_CATEGORIES;
  payload: string[];
};

type AddCategoryActionType = {
  type: typeof ADD_CATEGORY;
  payload: string;
};

type SetManageCurrentCategoryActionType = {
  type: typeof MANAGE_SET_CURRENT_CATEGORY;
  payload: string;
};

type SetFilterCurrentCategoryActionType = {
  type: typeof FILTER_SET_CURRENT_CATEGORY;
  payload: string | null;
};

export type CategoriesActionType =
  SetCategoriesActionType
  | AddCategoryActionType
  | SetManageCurrentCategoryActionType
  | SetFilterCurrentCategoryActionType;
