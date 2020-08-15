import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';
import { Button as BButton } from 'react-bootstrap';

import { NewPostCategoryWindow as styles } from 'styles';

/** Normal component's props. */
type OwnProps = {
  createCategoryCallback: (category: string) => void;
  cancelCallback: () => void;
};

const NewCategoryWindow: React.FC<OwnProps> = ({
  createCategoryCallback, cancelCallback
}) => {
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
      <BButton
        styleName='NewCategoryWindow__Button--Cut'
        onClick={() => {
        categoryInputRef.current!.toggleAttribute('disabled');
        createCategoryCallback(categoryInputRef.current?.value || '');
        }}
      >
        {translation('AddCategory')}
      </BButton>
      <BButton onClick={cancelCallback}>
        {translation('Cancel')}
      </BButton>
    </div>
  );
};

export default withCSSModule(NewCategoryWindow, styles);
