import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_CURRENT_POST,
  SET_CHUNKS_LEFT,
  PostsState,
  PostsActiontype,
  defaultPost
} from './types';

const initialState: PostsState = {
  chunksLeft: 0,
  currentPostsChunkNumber: 1,
  currentPostsChunk: [],
  currentPost: defaultPost
};

export const postsReducer = (
  state: PostsState = initialState,
  action: PostsActiontype
): PostsState => {
  switch (action.type) {
    case SET_CURRENT_POSTS_CHUNK_NUMBER:
      return {
        ...state,
        currentPostsChunkNumber: action.payload,
      };
    case SET_CURRENT_POSTS_CHUNK:
      return {
        ...state,
        currentPostsChunk: action.payload
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload
      };
    case SET_CHUNKS_LEFT:
      return {
        ...state,
        chunksLeft: action.payload,
      };
    default:
      return state;
  }
};
