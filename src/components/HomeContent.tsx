import React from 'react';
import cx from 'classnames';
import Calendar from 'react-calendar';
import Socials from 'components/Socials';
import Categories from 'components/Categories';
import Post from 'components/Post';
import Pagination from 'components/Pagination';
import {
  Container as BContainer,
  Row as BRow,
  Col as BCol
} from 'react-bootstrap';

import styles from 'styles/HomeContent.module.scss';
import 'react-calendar/dist/Calendar.css';

const category = 'Категория 1';

const HomeContent = () => (
  <BContainer className={styles['content']}>
    <div className={styles['row-wrapper']}>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <BCol md='8' className={styles['PostsAreaWrapper']}>
          {/* The publications block title. */}
          {/* Third-party classes: my-4. */}
          <h1 className={cx(
            styles['content__title'],
            'my-4'
          )}
          >
            Публикации
            <small>
              {' '}
              {category}
              {' '}
            </small>
          </h1>
          <Post />
          <div className={styles['PaginationWrapper']}>
            <Pagination />
          </div>
        </BCol>

        {/* Sidebar column. 4/12 of the page width. */}
        <BCol md='4'>
          {/* Posts categories list. */}
          <Categories />

          {/* React Calendar instance. */}
          <Calendar className={styles['adopted-calendar']} locale='ru-ru' />

          {/* Owner's social buttons. */}
          <Socials />
        </BCol>
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
