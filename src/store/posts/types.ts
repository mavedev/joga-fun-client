export const SET_CURRENT_POSTS_CHUNK_NUMBER = 'SET_CURRENT_POSTS_CHUNK_NUMBER';
export const SET_CURRENT_POSTS_CHUNK = 'SET_CURRENT_POSTS_CHUNK';

export type Post = {
  title: string;
  imageURL: string;
  body: string;
  created: string;
  category: string;
};

export type PostsState = {
  postsQuantity: number;
  currentPostsChunkNumber: number;
  currentPostsChunk: Post[]
};

export type SetCurrentPostsChunkNumberActionType = {
  type: typeof SET_CURRENT_POSTS_CHUNK_NUMBER;
  payload: number;
};

export type SetCurrentPostsChunkActionType = {
  type: typeof SET_CURRENT_POSTS_CHUNK;
  payload: Post[]
}

export type PostsActiontype = SetCurrentPostsChunkNumberActionType
  | SetCurrentPostsChunkActionType;
