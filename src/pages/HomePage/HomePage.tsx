import React from 'react';
import cx from 'classnames';
import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import HomeContent from 'components/related/HomePage';

import styles from 'styles/View.module.scss';

const HomePage: React.FC<{}> = () => (
  <div className={styles['page-wrapper']}>
    <div className={cx(
      styles['view-area'],
      styles['view-area--gradient-hot-cold']
    )}
    >
      <Navbar />
      <Header />
      <HomeContent />
    </div>
    <div className={styles['footer-wrapper']}>
      <Footer />
    </div>
  </div>
);

export default HomePage;
