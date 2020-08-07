import { PostDTO as Post } from 'dal';
import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_CHUNKS_LEFT,
  PostsActiontype
} from './types';

type PAType = PostsActiontype;

export const createSetCurrentPostChunkNumber = (count: number): PAType => ({
  type: SET_CURRENT_POSTS_CHUNK_NUMBER,
  payload: count
});

export const createSetCurrentPostChunk = (posts: Post[]): PAType => ({
  type: SET_CURRENT_POSTS_CHUNK,
  payload: posts
});

export const createSetChunksLeft = (quantity: number): PAType => ({
  type: SET_CHUNKS_LEFT,
  payload: quantity
});
