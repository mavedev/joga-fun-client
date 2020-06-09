import React from 'react';
import cx from 'classnames';
import {
  Col as BColumn,
  Row as BRow
} from 'react-bootstrap';

import styles from 'styles/Socials.module.scss';

const Socials = () => (
  <div>
    <BColumn>
      {/* Third-party classes: my-4. */}
      <h3 className={cx('my-4', styles['socials__title'])}>Мы в соцсетях:</h3>
      {/* The social buttons themselves. */}
      {/* Third-party classes: justify-content-center, align-items-center. */}
      <BRow className={cx('justify-content-center', 'align-items-center')}>
        {/* Facebook. */}
        <a
          href='https://facebook.com'
          className={cx(
            styles['socials__button'],
            styles['socials__button--facebook']
          )}
        >
          {/* Third-party style (Font Awesome). */}
          <i className={cx('fa', 'fa-facebook')} />
        </a>
        {/* Twitter. */}
        <a
          href='https://twitter.com'
          className={cx(
            styles['socials__button'],
            styles['socials__button--twitter']
          )}
        >
          {/* Third-party style (Font Awesome). */}
          <i className={cx('fa', 'fa-twitter')} />
        </a>
        {/* VK. */}
        <a
          href='https://vk.com'
          className={cx(
            styles['socials__button'],
            styles['socials__button--vk']
          )}
        >
          {/* Third-party style (Font Awesome). */}
          <i className={cx('fa', 'fa-vk')} />
        </a>
      </BRow>
    </BColumn>
  </div>
);

export default Socials;
