import { CategoriesActionType } from './categories/types';
import { LoginActionType } from './auth/types';
import { PostsActiontype, Post as PostType } from './posts/types';

export type Post = PostType;

export type AppActionType = CategoriesActionType
  | LoginActionType
  | PostsActiontype;
