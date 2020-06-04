import React from 'react';
import {
  Col as BColumn,
  Row as BRow
} from 'react-bootstrap';

import 'styles/Socials.scss';

const Socials = () => (
  <div>
    <BColumn className='socials'>
      {/* Third-party classes: my-4. */}
      <h3 className='my-4 socials__title'>Мы в соцсетях:</h3>
      {/* The social buttons themselves. */}
      {/* Third-party classes: justify-content-center, align-items-center. */}
      <BRow className='justify-content-center align-items-center'>
        {/* Facebook. */}
        <a
          href='https://facebook.com'
          className='socials__button socials__button--facebook'
        >
          {/* Third-party style (Font Awesome). */}
          <i className='fa fa-facebook' />
        </a>
        {/* Twitter. */}
        <a
          href='https://twitter.com'
          className='socials__button socials__button--twitter'
        >
          {/* Third-party style (Font Awesome). */}
          <i className='fa fa-twitter' />
        </a>
        {/* VK. */}
        <a
          href='https://vk.com'
          className='socials__button socials__button--vk'
        >
          {/* Third-party style (Font Awesome). */}
          <i className='fa fa-vk' />
        </a>
      </BRow>
    </BColumn>
  </div>
);

export default Socials;
