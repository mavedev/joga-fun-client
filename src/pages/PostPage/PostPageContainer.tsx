import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { PostDTO } from 'misc/dal';
import { AppState, createSetPostThunk } from 'store';
import PostPage from './PostPage';

/** Store state props type. */
type MapStateProps = { currentPost: PostDTO; };
/** Store dispatch props type. */
type MapDispatchProps = { setCurrentPost: (postID: Maybe<string>) => void; };
/** Router params. */
type MatchParams = { postID: Maybe<string>; };
/** Normal component's props that are to be passed. */
interface OwnProps extends RouteComponentProps<MatchParams> {}
/** All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  currentPost: state.posts.currentPost
});

const mapDispatchToProps: MapDispatchProps = {
  setCurrentPost: createSetPostThunk
};

/** A wrapper for the PostView component getting post info
   from the route and pushing the current post data to the store.
   Also passes the post to children components. */
const PostPostPageContainer: React.FC<AllProps> = ({
  match, currentPost, setCurrentPost
}) => {
  React.useEffect(
    () => { setCurrentPost(match.params.postID); },
    [match.params.postID, setCurrentPost]
  );

  return (
    <PostPage currentPost={currentPost} />
  );
};

export default compose<React.ComponentType<{}>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(PostPostPageContainer);
