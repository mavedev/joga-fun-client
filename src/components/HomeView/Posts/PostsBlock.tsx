import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import { PostDTO } from 'dal';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlock.module.scss';
import ScrollAnchor from 'components/ScrollAnchor';
import Post from './Post';
import PostsBlockTitleContainer from './PostsBlockTitleContainer';
import NavBlockContainer from './NavBlock';

/* Normal component's props that are to be passed. */
type OwnProps = { currentPostsChunk: PostDTO[]; };

/* Posts column. */
const PostsBlock: React.FC<OwnProps> = ({ currentPostsChunk }: OwnProps) => {
  const anchorReference = React.useRef<HTMLDivElement>(null);
  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, anchorReference.current?.offsetTop || 0);
  }, []);

  return (
    <BCol md='8' className={cn['PostsAreaWrapper']}>
      <PostsBlockTitleContainer />
      <ScrollAnchor ref={anchorReference} />
      {currentPostsChunk.map((post: PostDTO) => (
        <div key={post.title} className={cn['PostWrapper']}>
          <Post data={post} />
        </div>
      ))}
      <NavBlockContainer scrollAction={scrollToTop} />
    </BCol>
  );
};

export default PostsBlock;
