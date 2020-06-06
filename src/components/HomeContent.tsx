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
    <BRow>
      {/* Posts column. */}
      <BCol md='8'>
        <h1 className='my-4'>
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

      {/* Sidebar column. */}
      <BCol>
        <Categories />
        <Calendar locale='ru-ru' />
        <Socials />
      </BCol>
    </BRow>
  </BContainer>
);

export default HomeContent;
