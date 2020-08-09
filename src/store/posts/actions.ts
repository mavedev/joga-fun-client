import { Dispatch } from 'redux';
import HttpStatus from 'http-status-codes';

import API from 'api';
import { PostDTO as Post } from 'dal';
import {
  SET_CURRENT_POSTS_CHUNK_NUMBER,
  SET_CURRENT_POSTS_CHUNK,
  SET_CURRENT_POST,
  SET_CHUNKS_LEFT,
  PostsActiontype,
  defaultPost
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

export const createSetCurrentPost = (post: Post): PAType => ({
  type: SET_CURRENT_POST,
  payload: post
});

export const createSetChunksLeft = (quantity: number): PAType => ({
  type: SET_CHUNKS_LEFT,
  payload: quantity
});

const setDefaultPost = (dispatch: Dispatch<AppActionType>) => {
  dispatch(createSetCurrentPost(defaultPost));
};

export const createSetPostThunk = (postID: Maybe<string>) => (
  dispatch: Dispatch<AppActionType>
) => {
  API.getPost(postID)
    .then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(createSetCurrentPost(response.data['post'] as Post));
          break;
        default:
          setDefaultPost(dispatch);
      }
    })
    .catch(() => { setDefaultPost(dispatch); });
};
