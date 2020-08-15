import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';
import { Button as BButton } from 'react-bootstrap';

import { NewPostCategoryWindow as styles } from 'styles';

const NewCategoryWindow: React.FC<{}> = () => {
  const categoryInputRef = React.useRef<HTMLInputElement>(null);
  const { t: translation } = useTranslation();

  return (
    <div styleName='NewCategoryWindow__MainWrapper'>
      <input
        ref={categoryInputRef}
        type='text'
        placeholder={translation('NewCategoryPlaceholder')}
        className='form-control'
        styleName='NewCategoryWindow__Input'
      />
      <BButton>
        {translation('AddCategory')}
      </BButton>
    </div>
  );
};

export default withCSSModule(NewCategoryWindow, styles);
