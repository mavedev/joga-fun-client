import { Dispatch } from 'redux';
import HttpStatus from 'http-status-codes';

import API from 'misc/api';
import { PostDTO as Post } from 'misc/dal';
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

const setEmptyPost = (dispatch: Dispatch<AppActionType>) => {
  dispatch(createSetCurrentPost({ ...defaultPost, id: null }));
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
          setEmptyPost(dispatch);
      }
    })
    .catch(() => { setEmptyPost(dispatch); });
};
