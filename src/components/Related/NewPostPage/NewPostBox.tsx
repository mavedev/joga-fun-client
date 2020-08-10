import React from 'react';
import ReactQuill from 'react-quill';
import cn from 'styles/NewPostView/NewPostBox.module.scss';
import TopLevelContainer from './TopLevelBar';

import 'react-quill/dist/quill.snow.css';
import 'styles/overrides/Quill.scss';

const NewPostBox: React.FC<{}> = () => {
  const quillInstance = React.createRef<ReactQuill>();
  return (
    <div className={cn['MainWrapper']}>
      <TopLevelContainer />
      <div className={cn['EditorWrapper']}>
        <ReactQuill ref={quillInstance} />
      </div>
    </div>
  );
};

export default NewPostBox;
