import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';
import i18nextInstance from 'i18next';

import cn from 'styles/HomeView/HomeContent.module.scss';
import PostsContainer from './Posts';
import Sidebar from './Sidebar/Sidebar';

/* Main home view block. */
const HomeContent: React.FC<{}> = () => (
  <BContainer className={cn['content']}>
    <div className={cn['row-wrapper']}>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <PostsContainer />
        {/* Sidebar column. 4/12 of the page width. */}
        <Sidebar localizer={i18nextInstance} />
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
