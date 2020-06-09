import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomeContent from 'components/HomeContent';

import styles from 'styles/HomeView.module.scss';

const HomeView = () => (
  <div className={styles['page-wrapper']}>
    <div className={cx(
      styles['home-area'],
      styles['home-area--gradient-hot-cold']
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
