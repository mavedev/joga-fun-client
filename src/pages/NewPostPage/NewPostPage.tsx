import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Common/Navbar';
import NewPostBox from 'components/Related/NewPostPage';

import styles from 'styles/View.module.scss';

const NewPostPage: React.FC<{}> = () => (
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

export default NewPostPage;
