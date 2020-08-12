import React from 'react';
import withCSSModule from 'react-css-modules';

import { PostDTO } from 'misc/dal';
import { PostPageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import PostPageContent from 'components/related/PostPage';

/** Normal component's props that are to be passed. */
type OwnProps = { currentPost: PostDTO; };

const PostPage: React.FC<OwnProps> = ({ currentPost }) => (
  <>
    <div styleName='PostPage__MainWrapper'>
      <Navbar />
      <Header />
      <PostPageContent postToDisplay={currentPost} />
    </div>
    <div styleName='PostPage__FooterWrapper'>
      <Footer />
    </div>
  </>
);

export default withCSSModule(PostPage, styles);
