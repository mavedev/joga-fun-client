import React from 'react';
import withSSModule from 'react-css-modules';
import { Container as BContainer, Row as BRow } from 'react-bootstrap';

import { PostPageContantStyles as styles } from 'styles';
import Post from './Post';

const PostPageContent: React.FC<{}> = () => (
  <BContainer styleName='PostPageContent__MainWrapper'>
    <div styleName='PostPageContent__RowWrapper'>
      <BRow>
        <Post />
      </BRow>
    </div>
  </BContainer>
);

export default withSSModule(PostPageContent, styles);
