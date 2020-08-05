import { CategoriesActionType } from './categories/types';
import { LoginActionType } from './auth/types';
import { PostsActiontype } from './posts/types';

export type AppActionType = CategoriesActionType
  | LoginActionType
  | PostsActiontype;
