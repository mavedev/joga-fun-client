import { Dispatch } from 'redux';

import API from 'api';
import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_POSTS_QUANTITY,
  PostsActiontype,
  Post
} from './types';
import { AppActionType } from '../types';

type PAType = PostsActiontype;

export const createSetCurrentPostChunkNumber = (count: number): PAType => ({
  type: SET_CURRENT_POSTS_CHUNK_NUMBER,
  payload: count
});

export const createSetCurrentPostChunk = (posts: Post[]): PAType => ({
  type: SET_CURRENT_POSTS_CHUNK,
  payload: posts
});

export const createSetPostsQuantity = (quantity: number): PAType => ({
  type: SET_POSTS_QUANTITY,
  payload: quantity
});

export const createSetPostsCountThunk = () => (
  dispatch: Dispatch<AppActionType>
) => {
  API.getPostsQuantity().then((response) => {
    dispatch(createSetPostsQuantity(response.data['result']));
  });
};
