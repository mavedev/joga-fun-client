import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_CHUNKS_LEFT,
  PostsState,
  PostsActiontype
} from './types';

const initialState: PostsState = {
  chunksLeft: 0,
  currentPostsChunkNumber: 1,
  currentPostsChunk: []
};

export const postsReducer = (
  state: PostsState = initialState,
  action: PostsActiontype
): PostsState => {
  switch (action.type) {
    case SET_CURRENT_POSTS_CHUNK_NUMBER:
      return {
        chunksLeft: state.chunksLeft,
        currentPostsChunkNumber: action.payload,
        currentPostsChunk: state.currentPostsChunk
      };
    case SET_CURRENT_POSTS_CHUNK:
      return {
        chunksLeft: state.chunksLeft,
        currentPostsChunkNumber: state.currentPostsChunkNumber,
        currentPostsChunk: action.payload
      };
    case SET_CHUNKS_LEFT:
      return {
        chunksLeft: action.payload,
        currentPostsChunkNumber: state.currentPostsChunkNumber,
        currentPostsChunk: state.currentPostsChunk
      };
    default:
      return state;
  }
};
