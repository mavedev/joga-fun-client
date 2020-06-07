import React from 'react';
import Calendar from 'react-calendar';
import Socials from 'components/Socials';
import Categories from 'components/Categories';
import {
  Container as BContainer,
  Row as BRow,
  Col as BCol
} from 'react-bootstrap';

import 'styles/HomeContent.scss';
import 'react-calendar/dist/Calendar.css';

const category = 'Категория 1';

const HomeContent = () => (
  <BContainer className='content'>
    <div className='row-wrapper'>
      <BRow>
        {/* Posts column. 8/12 of the page width. */}
        <BCol md='8' className='content__column'>
          {/* The publications block title. */}
          {/* Third-party classes: my-4. */}
          <h1 className='content__title my-4'>
            Публикации
            <small>
              {' '}
              {category}
              {' '}
            </small>
          </h1>
          <div>
            <p>Текст Публикации</p>
          </div>
        </BCol>

        {/* Sidebar column. 4/12 of the page width. */}
        <BCol md='4' className='content__column'>
          <Categories />
          <Calendar locale='ru-ru' />
          <Socials />
        </BCol>
      </BRow>
    </div>
  </BContainer>
);

export default HomeContent;
