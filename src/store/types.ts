import { CategoriesActionType } from './categories/types';
import { LoginActionType } from './auth/types';
import { PostsActiontype } from './posts/types';
import { LocalesActionType } from './locales/types';

export type AppActionType = CategoriesActionType
  | LoginActionType
  | PostsActiontype
  | LocalesActionType;
