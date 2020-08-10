import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import { PostDTO } from 'misc/dal';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlock.module.scss';
import Post from './Post';
import PostsBlockTitleContainer from './PostsBlockTitleContainer';
import NavBlockContainer from './NavBlock';

/* Normal component's props that are to be passed. */
type OwnProps = {
  currentPostsChunk: PostDTO[];
  scrollAction: () => void;
};

/* Posts column. */
const PostsBlock: React.FC<OwnProps> = ({
  currentPostsChunk, scrollAction
}: OwnProps) => (
  <BCol md='8' className={cn['PostsAreaWrapper']}>
    <PostsBlockTitleContainer />
    {currentPostsChunk.map((post: PostDTO) => (
      <div key={post.title} className={cn['PostWrapper']}>
        <Post data={post} />
      </div>
    ))}
    <NavBlockContainer scrollAction={scrollAction} />
  </BCol>
);

export default PostsBlock;
