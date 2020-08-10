import React from 'react';

import { withAuthRedirect } from 'hoc';
import NewPostPage from './NewPostPage';

/* A wrapper for the NewPostView component checking auth info. */
const NewPostViewContainer: React.FC<{}> = () => (
  <NewPostPage />
);

export default withAuthRedirect('/login')(NewPostViewContainer);
