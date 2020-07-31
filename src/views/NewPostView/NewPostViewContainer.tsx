import React from 'react';

import { withAuthRedirect } from 'hoc';
import NewPostView from './NewPostView';

/* A wrapper for the NewPostView component checking auth info. */
const NewPostViewContainer: React.FC<{}> = () => (
  <NewPostView />
);

export default withAuthRedirect('/login')(NewPostViewContainer);
