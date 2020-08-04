export const CREATE_POSTS_COUNT = 'CREATE_POSTS_COUNT';

export type SetPostsCountActionType = {
  type: typeof CREATE_POSTS_COUNT;
  payload: number;
};

export type PostsActiontype = SetPostsCountActionType;
