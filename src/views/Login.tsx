import React from 'react';
import Navbar from 'components/Navbar';
import LoginBox from 'components/LoginBox';

const Home = () => (
  <div className='page-wrapper'>
    <div className='home-area home-area--gradient-hot-cold'>
      <Navbar />
      <LoginBox />
    </div>
  </div>
);

export default Home;
