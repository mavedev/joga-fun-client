import React from 'react';
import ReactQuill from 'react-quill';
import CategoriesContainer from 'components/CategoryChooser/CategoriesContainer';

import cn from 'styles/NewPostBox.module.scss';
import 'react-quill/dist/quill.snow.css';
import 'styles/overrides/Quill.scss';

const NewPostBox = () => {
  const quillInstance = React.createRef<ReactQuill>();
  return (
    <div className={cn['MainWrapper']}>
      <CategoriesContainer />
      <div className={cn['EditorWrapper']}>
        <ReactQuill ref={quillInstance} />
      </div>
    </div>
  );
};

export default NewPostBox;
