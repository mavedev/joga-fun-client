import React from 'react';
import withCSSModule from 'react-css-modules';

import { HomePageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import HomeContent from 'components/related/HomePage';
import ScrollAnchor from 'components/common/ScrollAnchor';
import FixedNav from 'components/common/FixedNav';

const HomePage: React.FC<{}> = () => {
  const anchorReference = React.useRef<HTMLDivElement>(null);

  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, anchorReference.current?.offsetTop || 0);
  }, []);

  return (
    <>
      <div styleName='HomePage__MainWrapper'>
        <ScrollAnchor ref={anchorReference} />
        <Navbar />
        <Header />
        <HomeContent />
        <FixedNav scrollAction={scrollToTop} />
      </div>
      <div styleName='HomePage__FooterWrapper'>
        <Footer />
      </div>
    </>
  );
};

export default withCSSModule(HomePage, styles);
