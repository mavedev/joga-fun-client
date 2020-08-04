import React from 'react';
import cx from 'classnames';

import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/PostsBlockTitle.module.scss';

/* The publications block title. */
const PostsBlockTitle: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <h1 className={cx(
      cn['PostsBlockTitle'],
      'my-4'
    )}
    >
      {t('Publications')}
      <small>
        {' '}
        category
        {' '}
      </small>
    </h1>
  );
};

export default PostsBlockTitle;
