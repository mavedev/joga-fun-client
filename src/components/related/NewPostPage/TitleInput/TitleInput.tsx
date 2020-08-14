import React from 'react';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';

import { withCSSModulePartiallyApplied } from 'misc/hoc';
import { NewPostBoxTitleInputStyles as styles } from 'styles';

/** Normal component props. */
type OwnProps = {};
/** Type of forwarded reference. */
type AnchorRefType = ((instance: HTMLInputElement | null) => void)
  | React.MutableRefObject<HTMLInputElement | null>
  | null;

/** Input field for post's title. */
const TitleInput = (_: OwnProps, ref: AnchorRefType) => {
  const { t: translator } = useTranslation();

  return (
    <div className='form-group'>
      <input
        ref={ref}
        type='text'
        className='form-control'
        styleName='TitleInput__Input'
        placeholder={translator('PostTitlePlaceholder')}
      />
    </div>
  );
};

/** Return type for the React.forwarRef function. */
type ExotocRefComponentType = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLInputElement>
>

export default compose<ExotocRefComponentType>(
  (x) => React.forwardRef<HTMLInputElement, OwnProps>(x),
  withCSSModulePartiallyApplied(styles)
)(TitleInput);
