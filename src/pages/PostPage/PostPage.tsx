import React from 'react';
import withCSSModule from 'react-css-modules';

import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import PostPageContent from 'components/related/PostPage';

import { PostPageStyles as styles } from 'styles';

const PostView: React.FC<{}> = () => (
  <div>
    <div styleName='PostPage__MainWrapper'>
      <Navbar />
      <Header />
      <PostPageContent />
    </div>
    <div styleName='HomePage__FooterWrapper'>
      <Footer />
    </div>
  </div>
);

export default withCSSModule(PostView, styles);
