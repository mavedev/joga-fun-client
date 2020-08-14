import React from 'react';
import ReactQuill from 'react-quill';
import withCSSModule from 'react-css-modules';

import { NewPostBoxStyles as styles } from 'styles';
import TopLevelContainer from './TopLevelBar';
import TitleInput from './TitleInput';

const NewPostBox: React.FC<{}> = () => {
  const quillInstance = React.useRef<ReactQuill>(null);
  const titleInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div styleName='NewPostBox__MainWrapper'>
      <TopLevelContainer titleInput={titleInputRef} editor={quillInstance} />
      <TitleInput ref={titleInputRef} />
      <ReactQuill ref={quillInstance} />
    </div>
  );
};

export default withCSSModule(NewPostBox, styles);
