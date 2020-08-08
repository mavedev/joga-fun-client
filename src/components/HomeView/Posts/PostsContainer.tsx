import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { PostDTO as Post } from 'dal';
import PostsBlock from './PostsBlock';

/* Store state props type. */
type MapStateProps = {
  currentPostsChunk: Post[];
};
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  currentPostsChunk: state.posts.currentPostsChunk
});

/* A wrapper for the PostsBlock component getting posts from the store. */
const PostsContainer: React.FC<AllProps> = ({ currentPostsChunk }: AllProps) => (
  <PostsBlock currentPostsChunk={currentPostsChunk} />
);

export default connect(mapStateToProps)(PostsContainer);
