import React from 'react';
import withCSSModule from 'react-css-modules';

import { NewPostPageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import NewPostBox from 'components/related/NewPostPage';

const NewPostPage: React.FC<{}> = () => (
  <div styleName='NewPostPage__MainWrapper--FullHeight'>
    <Navbar />
    <NewPostBox />
  </div>
);

export default withCSSModule(NewPostPage, styles);
