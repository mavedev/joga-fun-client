import React from 'react';
import {
  Card as BCard
} from 'react-bootstrap';

const Post = () => (
  <div className='MainWrapper'>
    <BCard>
      <img className='card-img-top' src='http://placehold.it/750x300' alt='Card cap' />
      <div className='card-body'>
        <h2 className='card-title'>Post Title</h2>
        <p
          className='card-text'
        >
          Будущая первая статья
        </p>
        <a href='/' className='btn btn-primary'>Read More &rarr;</a>
      </div>
      <div className='card-footer text-muted'>
        Posted on January 1, 2017 by
        <a href='/'>Start Bootstrap</a>
      </div>
    </BCard>
  </div>
);

export default Post;
