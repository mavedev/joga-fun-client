import React from 'react';
import ReactQuill from 'react-quill';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { NewPostBoxStyles as styles } from 'styles';
import TopLevelContainer from './TopLevelBar';
import PostInput from './PostInput';
import NewCategoryWindowContainer from './NewCategoryWindow';

const NewPostBox: React.FC<{}> = () => {
  const quillInstance = React.useRef<ReactQuill>(null);
  const titleInputRef = React.useRef<HTMLInputElement>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [categoryAddingNow, setCategoryAddingNow] = React.useState(false);
  const { t: translator } = useTranslation();

  return (
    <div styleName='NewPostBox__MainWrapper'>
      <TopLevelContainer
        titleInput={titleInputRef}
        imageInput={imageInputRef}
        editor={quillInstance}
        doBefore={() => { setCategoryAddingNow(true); }}
      />
      <PostInput
        placeholder={translator('PostTitlePlaceholder')}
        ref={titleInputRef}
      />
      <PostInput
        placeholder={translator('PostImagePlaceholder')}
        ref={imageInputRef}
      />
      <ReactQuill ref={quillInstance} />
      {
      categoryAddingNow
        ? (
          <NewCategoryWindowContainer
            doAfter={() => { setCategoryAddingNow(false); }}
          />
        )
        : null
      }
    </div>
  );
};

export default withCSSModule(NewPostBox, styles);
