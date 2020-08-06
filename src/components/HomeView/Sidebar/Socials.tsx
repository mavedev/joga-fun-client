import React from 'react';
import cx from 'classnames';
import { Col as BColumn, Row as BRow } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Socials.module.scss';

const Socials: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div>
      <BColumn>
        <h3 className={cx('my-4', cn['socials__title'])}>
          {translator('OurSocials')}
        </h3>
        {/* The social buttons themselves. */}
        <BRow className={cx('justify-content-center', 'align-items-center')}>
          {/* Facebook. */}
          <a
            href={process.env.REACT_APP_LINK_FB || '/'}
            className={cx(cn['socials__button'], cn['socials__button--facebook'])}
          >
            <i className={cx('fa', 'fa-facebook')} />
          </a>

          {/* Twitter. */}
          <a
            href={process.env.REACT_APP_LINK_TW || '/'}
            className={cx(cn['socials__button'], cn['socials__button--twitter'])}
          >
            <i className={cx('fa', 'fa-twitter')} />
          </a>

          {/* VK. */}
          <a
            href={process.env.REACT_APP_LINK_VK || '/'}
            className={cx(cn['socials__button'], cn['socials__button--vk'])}
          >
            <i className={cx('fa', 'fa-vk')} />
          </a>
        </BRow>
      </BColumn>
    </div>
  );
};

export default Socials;
