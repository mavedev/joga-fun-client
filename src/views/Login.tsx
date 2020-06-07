import React from 'react';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () => (
  <div className='page-wrapper'>
    <div className='home-area home-area--gradient-hot-cold'>
      <Navbar />
      <Header />
    </div>
    <div className='footer-wrapper'>
      <Footer />
    </div>
  </div>
);

export default Home;
