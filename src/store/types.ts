import { CategoriesActionType } from './categories/types';
import { LoginActionType } from './auth/types';

export type AppActionType = CategoriesActionType
  | LoginActionType;
