import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  PostsState,
  PostsActiontype
} from './types';

const initialState: PostsState = {
  postsQuantity: 0,
  currentPostsChunkNumber: 0,
  currentPostsChunk: []
};

export const postsReducer = (
  state: PostsState = initialState,
  action: PostsActiontype
): PostsState => {
  switch (action.type) {
    case SET_CURRENT_POSTS_CHUNK_NUMBER:
      return {
        postsQuantity: action.payload,
        currentPostsChunkNumber: state.currentPostsChunkNumber,
        currentPostsChunk: state.currentPostsChunk
      };
    case SET_CURRENT_POSTS_CHUNK:
      return {
        postsQuantity: state.postsQuantity,
        currentPostsChunkNumber: state.currentPostsChunkNumber,
        currentPostsChunk: action.payload
      };
    default:
      return state;
  }
};
