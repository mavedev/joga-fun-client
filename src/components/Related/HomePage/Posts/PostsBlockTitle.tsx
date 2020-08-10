import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/HomeView/Posts/PostsBlockTitle.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = { title: string | null; };

/* The publications block title. */
const PostsBlockTitle = ({ title }: OwnProps) => {
  const { t: translator } = useTranslation();

  return (
    <h1 className={cx(cn['PostsBlockTitle'], 'my-4')}>
      {`${translator('Publications')}:`}
      <small>{` ${title || translator('CategoriesAll')} `}</small>
    </h1>
  );
};

export default React.memo(PostsBlockTitle);
