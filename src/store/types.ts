import { CategoriesActionType } from './categories/types';
import { LoginActionType } from './auth/types';
import { LangActionType } from './translations/types';

export type AppActionType = CategoriesActionType
  | LoginActionType
  | LangActionType;
