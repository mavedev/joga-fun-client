import React from 'react';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomeContent from 'components/HomeContent';

import 'styles/Home.scss';

const Home = () => (
  <div className='home-area--gradient-hot-cold'>
    <Navbar />
    <Header />
    <HomeContent />
    <Footer />
  </div>
);

export default Home;
