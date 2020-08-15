import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { APIResponse } from 'misc/api';
import { NewPostBoxTopLevelBarStyles as styles } from 'styles';
import CategoryChooser from './CategoryChooser';
import PublishButton from './PublishButton';

/** Normal component's props that are to be passed. */
type OwnProps = {
  categories: string[],
  currentCategory: string,
  setCurrentCategory: (category: string) => void;
  publishAction: () => APIResponse;
};

/** A bar containing the categories chooser and the publish button. */
const TopLevelBar: React.FC<OwnProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
  publishAction
}) => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='TopLevelBar__MainWrapper'>
      <div styleName='TopLevelBar__CategoryChooserWrapper'>
        <CategoryChooser
          categories={[...categories, translator('NoCategory')]}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </div>
      <div styleName='TopLevelBar__PublishButtonWrapper'>
        <PublishButton action={publishAction} />
      </div>
    </div>
  );
};

export default withCSSModule(TopLevelBar, styles);
