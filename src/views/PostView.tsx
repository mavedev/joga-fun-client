import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';

import cn from 'styles/View.module.scss';

const PostView: React.FC<{}> = () => (
  <div className={cn['page-wrapper']}>
    <div className={cx(
      cn['view-area'],
      cn['view-area--gradient-hot-cold']
    )}
    >
      <Navbar />
      <Header />
    </div>
    <div className={cn['footer-wrapper']}>
      <Footer />
    </div>
  </div>
);

export default PostView;
