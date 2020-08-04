import React from 'react';
import {
  Container as BContainer,
  Row as BRow,
  Col as BCol
} from 'react-bootstrap';

import Calendar from 'react-calendar';
import CategoriesContainer from 'components/Categories';
import cn from 'styles/HomeView/HomeContent.module.scss';

import Post from './Post';
import Socials from './Socials';
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
        <BCol md='4'>
          {/* Posts categories list. */}
          <CategoriesContainer />

          {/* React Calendar instance. */}
          <Calendar className={cn['adopted-calendar']} locale='ru-ru' />

          {/* Owner's social buttons. */}
          <Socials />
        </BCol>
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
