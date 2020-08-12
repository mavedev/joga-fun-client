import React from 'react';
import withCSSModule from 'react-css-modules';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import { PostDTO } from 'misc/dal';
import { PostPageContentStyles as styles } from 'styles';
import Post from './Post';

/** Normal component's props that are to be passed. */
type OwnProps = { postToDisplay: PostDTO; };

const PostPageContent: React.FC<OwnProps> = ({ postToDisplay }) => (
  <BContainer styleName='PostPageContent__MainWrapper'>
    <div styleName='PostPageContent__RowWrapper'>
      <BRow>
        <Post data={postToDisplay} />
      </BRow>
    </div>
  </BContainer>
);

export default withCSSModule(PostPageContent, styles);
