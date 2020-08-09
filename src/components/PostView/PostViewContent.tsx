import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import cn from 'styles/PostView/PostViewContent.module.scss';
import Post from './Post';

const PostViewContent: React.FC<{}> = () => (
  <BContainer className={cn['PostViewContent__Container']}>
    <div className={cn['PostViewContent__RowWrapper']}>
      <BRow>
        <Post />
      </BRow>
    </div>
  </BContainer>
);

export default PostViewContent;
