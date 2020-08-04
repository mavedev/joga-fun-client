import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import cn from 'styles/HomeView/HomeContent.module.scss';
import PostsBlock from './Posts/PostsBlock';
import Sidebar from './Sidebar';

/* Main home view block. */
const HomeContent = () => (
  <BContainer className={cn['content']}>
    <div className={cn['row-wrapper']}>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <PostsBlock />
        {/* Sidebar column. 4/12 of the page width. */}
        <Sidebar />
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
