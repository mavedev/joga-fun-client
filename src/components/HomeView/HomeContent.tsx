import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import cn from 'styles/HomeView/HomeContent.module.scss';
import PostsContainer from './Posts';
import SidebarContainer from './Sidebar';

/* Main home view block. */
const HomeContent: React.FC<{}> = () => (
  <BContainer className={cn['content']}>
    <div className={cn['row-wrapper']}>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <PostsContainer />
        {/* Sidebar column. 4/12 of the page width. */}
        <SidebarContainer />
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
