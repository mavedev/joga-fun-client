import React from 'react';
import cx from 'classnames';

import Navbar from 'components/Common/Navbar';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import PostPageContent from 'components/Related/PostPage';

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
      <PostPageContent />
    </div>
    <div className={cn['footer-wrapper']}>
      <Footer />
    </div>
  </div>
);

export default PostView;