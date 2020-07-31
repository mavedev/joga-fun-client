import React from 'react';
import ReactQuill from 'react-quill';
import TopLevelContainer from 'components/NewPostView/TopLevelBar';

import cn from 'styles/NewPostView/NewPostBox.module.scss';
import 'react-quill/dist/quill.snow.css';
import 'styles/overrides/Quill.scss';

const NewPostBox = () => {
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
