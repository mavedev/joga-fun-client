import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomeContent from 'components/HomeView';

import styles from 'styles/View.module.scss';

const HomeView = () => (
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

export default HomeView;
