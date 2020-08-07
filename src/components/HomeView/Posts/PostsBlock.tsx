import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import { PostDTO } from 'dal';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlock.module.scss';
import Post from './Post';
import PostsBlockTitleContainer from './PostsBlockTitleContainer';

/* Normal component's props that are to be passed. */
type OwnProps = {
  chunksLeft: number;
  postsChunkCapacity: number;
  currentPostsChunkNumber: number;
  currentPostsChunk: PostDTO[];
};

/* Posts column. */
const PostsBlock: React.FC<OwnProps> = ({
  chunksLeft,
  postsChunkCapacity,
  currentPostsChunkNumber,
  currentPostsChunk
}: OwnProps) => (
  <BCol md='8' className={cn['PostsAreaWrapper']}>
    <PostsBlockTitleContainer />
    {currentPostsChunk.map((post: PostDTO) => (
      <div key={post.title} className={cn['PostWrapper']}>
        <Post data={post} />
      </div>
    ))}
  </BCol>
);

export default PostsBlock;
