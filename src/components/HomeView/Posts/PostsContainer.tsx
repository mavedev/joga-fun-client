import React from 'react';

import { Post } from 'store';

/* Store state props type. */
type MapStateProps = { currentPostsChunk: Post[]; };
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const PostsContainer: React.FC<AllProps> = ({ currentPostsChunk }: AllProps) => (
  
);

export default PostsContainer;
