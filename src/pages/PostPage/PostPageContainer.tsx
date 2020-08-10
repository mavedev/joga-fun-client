import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { createSetPostThunk } from 'store';
import PostPage from './PostPage';

/** Store state props type. */
type MapStateProps = {};
/** Store dispatch props type. */
type MapDispatchProps = { setCurrentPost: (postID: Maybe<string>) => void; };
/** Router params. */
type MatchParams = { postID: Maybe<string>; };
/** Normal component's props that are to be passed. */
interface OwnProps extends RouteComponentProps<MatchParams> {}
/** All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapDispatchToProps: MapDispatchProps = {
  setCurrentPost: createSetPostThunk
};

/* A wrapper for the PostView component getting post info
   from the route and pushing the current post data to the store. */
const PostPostPageContainer: React.FC<AllProps> = ({
  match, setCurrentPost
}: AllProps) => {
  React.useEffect(
    () => { setCurrentPost(match.params.postID); },
    [setCurrentPost, match.params.postID]
  );

  return (
    <PostPage />
  );
};

export default compose<React.ComponentType<{}>>(
  withRouter,
  connect(null, mapDispatchToProps)
)(PostPostPageContainer);
