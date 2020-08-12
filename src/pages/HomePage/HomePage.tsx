import React from 'react';
import withCSSModule from 'react-css-modules';

import { HomePageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import HomeContent from 'components/related/HomePage';

const HomePage: React.FC<{}> = () => (
  <div>
    <div styleName='HomePage__MainWrapper'>
      <Navbar />
      <Header />
      <HomeContent />
    </div>
    <div styleName='HomePage__FooterWrapper'>
      <Footer />
    </div>
  </div>
);

export default withCSSModule(HomePage, styles);
