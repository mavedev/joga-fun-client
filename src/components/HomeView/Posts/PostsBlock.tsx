import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import { PostDTO } from 'dal';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlock.module.scss';
import Post from './Post';
import PostsBlockTitle from './PostsBlockTitle';

/* Normal component's props that are to be passed. */
type OwnProps = { posts: PostDTO[]; };

/* Posts column. */
const PostsBlock: React.FC<OwnProps> = ({ posts }: OwnProps) => (
  <BCol md='8' className={cn['PostsAreaWrapper']}>
    <PostsBlockTitle />
    {
      posts.map((post: PostDTO) => (
        <div className={cn['PostWrapper']}>
          <Post data={post} />
        </div>
      ))
    }
  </BCol>
);

export default PostsBlock;
