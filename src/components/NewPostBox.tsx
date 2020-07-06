import React from 'react';
import ReactQuill from 'react-quill';
import CategoryChooser from 'components/CategoryChooser';

import cn from 'styles/NewPostBox.module.scss';
import 'react-quill/dist/quill.snow.css';
import 'styles/overrides/Quill.scss';

const NewPostBox = () => {
  const quillInstance = React.createRef<ReactQuill>();
  return (
    <div className={cn['MainWrapper']}>
      <CategoryChooser />
      <div className={cn['EditorWrapper']}>
        <ReactQuill ref={quillInstance} />
      </div>
    </div>
  );
};

export default NewPostBox;
