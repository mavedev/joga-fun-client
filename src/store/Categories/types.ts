export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export interface CategoriesState {
  categories: string[];
  currentCategory: string;
}

interface SetCategoriesActionType {
  type: typeof SET_CATEGORIES;
  payload: string[];
}

interface SetCurrentCategoryActionType {
  type: typeof SET_CURRENT_CATEGORY;
  payload: string;
}

export type CategoriesActionType =
  SetCategoriesActionType
  | SetCurrentCategoryActionType;
