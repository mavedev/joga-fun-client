import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import PostView from './PostView';

type MatchParams = { postID: string | undefined; };

/** Normal component's props that are to be passed. */
interface OwnProps extends RouteComponentProps<MatchParams> {}

const PostViewContainer: React.FC<OwnProps> = ({ match }: OwnProps) => {
  return (
    <PostView />
  );
};

export default withRouter(PostViewContainer);
