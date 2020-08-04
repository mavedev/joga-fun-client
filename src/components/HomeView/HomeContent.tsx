import React from 'react';
import {
  Container as BContainer,
  Row as BRow,
  Col as BCol
} from 'react-bootstrap';

import cn from 'styles/HomeView/HomeContent.module.scss';

import Post from './Post';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import PostsBlockTitle from './PostsBlockTitle';
import 'react-calendar/dist/Calendar.css';

const HomeContent = () => (
  <BContainer className={cn['content']}>
    <div className={cn['row-wrapper']}>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <BCol md='8' className={cn['PostsAreaWrapper']}>
          <PostsBlockTitle />
          <Post />
          <div className={cn['PaginationWrapper']}>
            <Pagination />
          </div>
        </BCol>

        {/* Sidebar column. 4/12 of the page width. */}
        <Sidebar />
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
