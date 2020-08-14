import React from 'react';
import withCSSModule from 'react-css-modules';

import { NewPostBoxTopLevelBarStyles as styles } from 'styles';
import CategoryChooser from './CategoryChooser';
import PublishButton from './PublishButton';

/** Normal component's props that are to be passed. */
type OwnProps = {
  categories: string[],
  currentCategory: string,
  setCurrentCategory: (category: string) => void;
  publishAction: () => void;
};

/** A bar containing the categories chooser and the publish button. */
const TopLevelBar: React.FC<OwnProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
  publishAction
}) => (
  <div styleName='TopLevelBar__MainWrapper'>
    <div styleName='TopLevelBar__CategoryChooserWrapper'>
      <CategoryChooser
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </div>
    <div styleName='TopLevelBar__PublishButtonWrapper'>
      <PublishButton action={publishAction} />
    </div>
  </div>
);

export default withCSSModule(TopLevelBar, styles);
