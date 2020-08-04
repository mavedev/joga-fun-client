import {
  CREATE_POSTS_COUNT,
  PostsState,
  PostsActiontype
} from './types';

const initialState: PostsState = {
  postsQuantity: 0,
  currentPostsChunk: 0
};

export const postsReducer = (
  state: PostsState = initialState,
  action: PostsActiontype
): PostsState => {
  switch (action.type) {
    case CREATE_POSTS_COUNT:
      return {
        postsQuantity: action.payload,
        currentPostsChunk: state.currentPostsChunk
      };
    default:
      return state;
  }
};
