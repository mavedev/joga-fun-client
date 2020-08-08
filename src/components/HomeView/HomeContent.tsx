import React from 'react';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import cn from 'styles/HomeView/HomeContent.module.scss';
import ScrollAnchor from 'components/ScrollAnchor';
import PostsContainer from './Posts';
import SidebarContainer from '../Sidebar';

/* Main home view block. */
const HomeContent: React.FC<{}> = () => {
  const anchorReference = React.useRef<HTMLDivElement>(null);
  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, anchorReference.current?.offsetTop || 0);
  }, []);

  return (
    <BContainer className={cn['content']}>
      <div className={cn['row-wrapper']}>
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

export default HomeContent;
