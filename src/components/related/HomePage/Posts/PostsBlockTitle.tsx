import React from 'react';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';

import { PostsBlockTitleStyles as styles } from 'styles';
import { withCSSModulePartiallyApplied } from 'misc/hoc';

/** Normal component's props that are to be passed. */
type OwnProps = { title: string | null; };

/** The publications block title. */
const PostsBlockTitle: React.FC<OwnProps> = ({ title }) => {
  const { t: translator } = useTranslation();

  return (
    <h1 className='my-4' styleName='PostsBlockTitle__Text'>
      {`${translator('Publications')}:`}
      <small>{` ${title || translator('CategoriesAll')} `}</small>
    </h1>
  );
};

export default compose<React.ComponentType<OwnProps>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(PostsBlockTitle);
