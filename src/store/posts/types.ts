export const CREATE_POSTS_COUNT = 'CREATE_POSTS_COUNT';

export type PostsState = {
  postsQuantity: number;
  currentPostsChunk: number;
};

export type SetPostsCountActionType = {
  type: typeof CREATE_POSTS_COUNT;
  payload: number;
};

export type PostsActiontype = SetPostsCountActionType;
