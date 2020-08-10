import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Common/Navbar';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import HomeContent from 'components/Related/HomePage';

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