import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import PostsBlockTitle from './PostsBlockTitle';

/* Store state props type. */
type MapStateProps = { category: string | null; };
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  category: state.categories.currentFilteredCategory
});

/* A wrapper for the PostsBlockTitle component getting the category from the store. */
const PostsBlockTitleContainer: React.FC<AllProps> = ({ category }: AllProps) => (
  <PostsBlockTitle title={category} />
);

export default connect(mapStateToProps)(PostsBlockTitleContainer);
