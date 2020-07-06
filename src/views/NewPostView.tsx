import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import ReactQuill from 'react-quill';

import styles from 'styles/View.module.scss';
import 'react-quill/dist/quill.snow.css';

const NewPostView = () => {
  const quillInstance = React.createRef<ReactQuill>();
  return (
    <div>
      <div className={cx(
        styles['view-area'],
        styles['view-area--gradient-hot-cold'],
        styles['view-area--full-height']
      )}
      >
        <Navbar />
        <ReactQuill ref={quillInstance} />
      </div>
    </div>
  );
};

export default NewPostView;
