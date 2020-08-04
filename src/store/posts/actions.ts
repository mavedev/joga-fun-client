import { Dispatch } from 'redux';

import API from 'api';
import { CREATE_POSTS_COUNT, PostsActiontype } from './types';
import { AppActionType } from '../types';

export const createSetPostsCount = (count: number): PostsActiontype => ({
  type: CREATE_POSTS_COUNT,
  payload: count
});

export const createSetPostsCountThunk = () => (
  dispatch: Dispatch<AppActionType>
) => {
  API.getPostsQuantity().then((response) => {
    dispatch(createSetPostsCount(response.data['result']));
  });
};
