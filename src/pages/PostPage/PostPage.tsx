import React from 'react';
import withCSSModule from 'react-css-modules';

import { PostDTO } from 'misc/dal';
import { PostPageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import PostPageContent from 'components/related/PostPage';
import ScrollAnchor from 'components/common/ScrollAnchor';
import FixedNav from 'components/common/FixedNav';

/** Normal component's props that are to be passed. */
type OwnProps = { currentPost: PostDTO; };

const PostPage: React.FC<OwnProps> = ({ currentPost }) => {
  const anchorReference = React.useRef<HTMLDivElement>(null);

  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, anchorReference.current?.offsetTop || 0);
  }, []);

  return (
    <>
      <div styleName='PostPage__MainWrapper'>
        <ScrollAnchor ref={anchorReference} />
        <Navbar />
        <Header />
        <PostPageContent postToDisplay={currentPost} />
        <FixedNav scrollAction={scrollToTop} />
      </div>
      <div styleName='PostPage__FooterWrapper'>
        <Footer />
      </div>
    </>
  );
};

export default withCSSModule(PostPage, styles);
