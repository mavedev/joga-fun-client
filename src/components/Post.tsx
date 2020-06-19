import React from 'react';
import {
  Card as BCard
} from 'react-bootstrap';

const Post = () => (
  <div className='MainWrapper'>
    <BCard>
      <img className='card-img-top' src='http://placehold.it/750x300' alt='Card cap' />
      <div className='card-body'>
        <h2 className='card-title'>Будущая первая статья</h2>
        <p
          className='card-text'
        >
          Краткое описание будущей первой статьи.
        </p>
        <a href='/' className='btn btn-primary'>Читать полностью &rarr;</a>
      </div>
      <div className='card-footer text-muted'>
        <p>19 июня 2020</p>
      </div>
    </BCard>
  </div>
);

export default Post;
