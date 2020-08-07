import React from 'react';
import { connect } from 'react-redux';

import * as constants from 'appConstants';
import { AppState } from 'store';
import { PostDTO as Post } from 'dal';
import PostsBlock from './PostsBlock';

/* Store state props type. */
type MapStateProps = {
  postsQuantity: number;
  currentPostsChunkNumber: number;
  currentPostsChunk: Post[];
};
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  postsQuantity: state.posts.postsQuantity,
  currentPostsChunkNumber: state.posts.currentPostsChunkNumber,
  currentPostsChunk: state.posts.currentPostsChunk
});

/* A wrapper for the PostsBlock component getting posts from the store. */
const PostsContainer: React.FC<AllProps> = ({
  postsQuantity,
  currentPostsChunkNumber,
  currentPostsChunk
}: AllProps) => (
  <PostsBlock
    postsQuantity={postsQuantity}
    postsChunkCapacity={constants.POSTS_CHUNK_CAPACITY}
    currentPostsChunkNumber={currentPostsChunkNumber}
    currentPostsChunk={currentPostsChunk}
  />
);

export default connect(mapStateToProps)(PostsContainer);
