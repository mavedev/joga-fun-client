import React from 'react';
import withCSSModule from 'react-css-modules';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import styles from 'styles/Related/HomePage/HomeContent.module.scss';
import ScrollAnchor from 'components/common/ScrollAnchor';
import SidebarContainer from 'components/common/Sidebar';
import PostsContainer from './Posts';

/** Main home view block. */
const HomeContent: React.FC<{}> = () => {
  const anchorReference = React.useRef<HTMLDivElement>(null);
  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, anchorReference.current?.offsetTop || 0);
  }, []);

  return (
    <BContainer styleName='HomeContent__Container'>
      <div styleName='HomeContent__RowWrapper'>
        <BRow>
          <ScrollAnchor ref={anchorReference} />
          {/* Posts column. 8/12 of the page width. */}
          <PostsContainer scrollAction={scrollToTop} />
          {/* Sidebar column. 4/12 of the page width. */}
          <SidebarContainer scrollAction={scrollToTop} />
        </BRow>
      </div>
    </BContainer>
  );
};

export default withCSSModule(HomeContent, styles);
