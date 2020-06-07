import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import LoginBox from 'components/LoginBox';

const Home = () => (
  <div className='page-wrapper'>
    <div className='home-area home-area--gradient-hot-cold'>
      <Navbar />
      <LoginBox />
    </div>
    <div className='footer-wrapper'>
      <Footer />
    </div>
  </div>
);

export default Home;
