import React from 'react';
import {
  Col as BColumn,
  Row as BRow
} from 'react-bootstrap';

const Socials = () => (
  <div>
    <BColumn>
      <h3 className='my-4 align-center'>Мы в соцсетях:</h3>
      <BRow className='justify-content-center align-items-center'>
        <a
          href='http://scripteden.com/download/eden-ui/'
          className='btn-social btn-facebook'
        >
          <i className='fa fa-facebook' />
        </a>
        <a
          href='http://scripteden.com/download/eden-ui/'
          className='btn-social btn-twitter'
        >
          <i className='fa fa-twitter' />
        </a>
        <a
          href='http://scripteden.com/download/eden-ui/'
          className='btn-social btn-vk'
        >
          <i className='fa fa-vk' />
        </a>
      </BRow>
    </BColumn>
  </div>
);

export default Socials;
