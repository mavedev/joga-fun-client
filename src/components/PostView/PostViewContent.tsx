import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import cn from 'styles/PostView/PostViewContent.module.scss';
import PostContainer from './PostContainer';

const PostViewContent: React.FC<{}> = () => (
  <BContainer className={cn['PostViewContent__Container']}>
    <div className={cn['PostViewContent__RowWrapper']}>
      <BRow>
        <PostContainer />
      </BRow>
    </div>
  </BContainer>
);

export default PostViewContent;
