import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_POSTS_QUANTITY,
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
    case SET_POSTS_QUANTITY:
      return {
        postsQuantity: action.payload,
        currentPostsChunkNumber: state.currentPostsChunkNumber,
        currentPostsChunk: state.currentPostsChunk
      };
    default:
      return state;
  }
};
