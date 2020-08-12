import React from 'react';
import ReactQuill from 'react-quill';
import withCSSModule from 'react-css-modules';

import { NewPostBoxStyles as styles } from 'styles';
import TopLevelContainer from './TopLevelBar';

const NewPostBox: React.FC<{}> = () => {
  const quillInstance = React.createRef<ReactQuill>();

  return (
    <div styleName='NewPostBox__MainWrapper'>
      <TopLevelContainer />
      <div styleName='NewPostBox__EditorWrapper'>
        <ReactQuill ref={quillInstance} />
      </div>
    </div>
  );
};

export default withCSSModule(NewPostBox, styles);
