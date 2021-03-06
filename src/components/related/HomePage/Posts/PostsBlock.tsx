import React from 'react';
import withCSSModule from 'react-css-modules';
import { Col as BCol } from 'react-bootstrap';

import { PostDTO } from 'misc/dal';
import { PostsBlockStyles as styles } from 'styles';
import Post from './Post';
import PostsBlockTitleContainer from './PostsBlockTitleContainer';
import NavBlockContainer from './NavBlock';

/** Normal component's props that are to be passed. */
type OwnProps = {
  currentPostsChunk: PostDTO[];
  scrollAction: () => void;
};

/** Posts column. */
const PostsBlock: React.FC<OwnProps> = ({ currentPostsChunk, scrollAction }) => (
  <BCol md='8' styleName='PostsBlock__MainWrapper'>
    <PostsBlockTitleContainer />
    {currentPostsChunk.map((post: PostDTO) => (
      <div key={post.title} styleName='PostsBlock__PostWrapper'>
        <Post data={post} />
      </div>
    ))}
    <NavBlockContainer scrollAction={scrollAction} />
  </BCol>
);

export default withCSSModule(PostsBlock, styles);
