import React from 'react';
import { compose } from 'redux';

import styles from 'styles/Common/Categories/CategoryItem.module.scss';
import { withCSSModulePartiallyApplied } from 'misc/hoc';

/** Normal component's props that are to be passed. */
type OwnProps = { name: string; action: () => void; };

/** List item with name and action to do on clicking the link within. */
const CategoryItem: React.FC<OwnProps> = ({ name, action }: OwnProps) => (
  <li>
    <div styleName='CategoryItem__ButtonWrapper'>
      <button
        styleName='CategoryItem__Button'
        type='button'
        onClick={action}
      >
        {name}
      </button>
    </div>
  </li>
);

/* Use memoizing because list containing category items
   is changed on language change, but items do not by design
   (there names are language-independent.) */
export default compose<React.ComponentType<OwnProps>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(CategoryItem);
