import React from 'react';
import { compose } from 'redux';

import { withCSSModulePartiallyApplied } from 'misc/hoc';
import { NewPostBoxInputStyles as styles } from 'styles';

/** Normal component props. */
type OwnProps = { placeholder: string; };
/** Type of forwarded reference. */
type AnchorRefType = ((instance: HTMLInputElement | null) => void)
  | React.MutableRefObject<HTMLInputElement | null>
  | null;

/** Input field for post's title. */
const PostInput = ({ placeholder }: OwnProps, ref: AnchorRefType) => (
  <div className='form-group'>
    <input
      ref={ref}
      type='text'
      className='form-control'
      styleName='PostInput__Input'
      placeholder={placeholder}
    />
  </div>
);

const withForwardedRef = (Component: typeof PostInput) => (
  React.forwardRef<HTMLInputElement, OwnProps>(Component)
);

/** Return type for the React.forwarRef function. */
type ExotocRefComponentType = ReturnType<typeof withForwardedRef>;

export default compose<ExotocRefComponentType>(
  (x) => React.forwardRef<HTMLInputElement, OwnProps>(x),
  withCSSModulePartiallyApplied(styles)
)(PostInput);
