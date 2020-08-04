import React from 'react';
import {
  Card as BCard
} from 'react-bootstrap';

import cx from 'classnames';
import styles from 'styles/HomeView/Posts/Post.module.scss';

const Post = () => (
  <div className='MainWrapper'>
    <BCard>
      <img
        className='card-img-top'
        src='https://magic-online.ru/wp-content/cache/thumb/c1/123bd2d06e004c1_750x300.jpg'
        alt='Card cap'
      />
      <div className='card-body'>
        <h2 className='card-title'>Будущая первая статья</h2>
        <p
          className='card-text'
        >
          Краткое описание будущей первой статьи.
        </p>
        <a
          href='/'
          className={cx(
            'btn',
            'btn-primary',
            styles['disabled-link']
          )}
        >
          Читать полностью &rarr;
        </a>
      </div>
      <div className='card-footer text-muted'>
        <p>19 июня 2020</p>
      </div>
    </BCard>
  </div>
);

export default Post;
