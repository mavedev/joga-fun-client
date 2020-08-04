import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlock.module.scss';
import Post from './Post';
import PostsBlockTitle from './PostsBlockTitle';

/* Posts column. */
const PostsBlock: React.FC<{}> = () => (
  <BCol md='8' className={cn['PostsAreaWrapper']}>
    <PostsBlockTitle />
    <Post />
  </BCol>
);

export default PostsBlock;
