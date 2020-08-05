import { PostDTO as Post } from 'dal';

export const SET_CURRENT_POSTS_CHUNK_NUMBER = 'SET_CURRENT_POSTS_CHUNK_NUMBER';
export const SET_CURRENT_POSTS_CHUNK = 'SET_CURRENT_POSTS_CHUNK';
export const SET_POSTS_QUANTITY = 'SET_POSTS_QUANTITY';

export type PostsState = {
  postsQuantity: number;
  currentPostsChunkNumber: number;
  currentPostsChunk: Post[];
};

export type SetCurrentPostsChunkNumberActionType = {
  type: typeof SET_CURRENT_POSTS_CHUNK_NUMBER;
  payload: number;
};

export type SetCurrentPostsChunkActionType = {
  type: typeof SET_CURRENT_POSTS_CHUNK;
  payload: Post[];
};

export type SetPostsQuantityActionType = {
  type: typeof SET_POSTS_QUANTITY;
  payload: number;
};

export type PostsActiontype = SetCurrentPostsChunkNumberActionType
  | SetCurrentPostsChunkActionType
  | SetPostsQuantityActionType;
