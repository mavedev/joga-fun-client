import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import NewPostBox from 'components/NewPostBox';

import styles from 'styles/View.module.scss';

const NewPostView = () => (
  <div>
    <div className={cx(
      styles['view-area'],
      styles['view-area--gradient-hot-cold'],
      styles['view-area--full-height']
    )}
    >
      <Navbar />
      <NewPostBox />
    </div>
  </div>
);

export default NewPostView;
