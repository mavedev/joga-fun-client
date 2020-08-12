import React from 'react';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';

import { PostsNavBlockStyles as styles } from 'styles';
import { withCSSModulePartiallyApplied } from 'misc/hoc';
import NavButton from './NavButton';

/** Normal component's props that are to be passed. */
type OwnProps = {
  enablePrev: boolean;
  enableNext: boolean;
  nextAction: (...args: any[]) => void;
  prevAction: (...args: any[]) => void;
};

/** The post block's navigation buttons node. */
const NavBlock: React.FC<OwnProps> = ({
  enablePrev, enableNext, nextAction, prevAction
}) => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='NavBlock'>
      <div styleName='NavBlock__NavButtonWrapper'>
        <NavButton
          text={translator('LoadPrev')}
          action={prevAction}
          disabled={!enablePrev}
        />
      </div>
      <div styleName='NavBlock__NavButtonWrapper'>
        <NavButton
          text={translator('LoadMore')}
          action={nextAction}
          disabled={!enableNext}
        />
      </div>
    </div>
  );
};

export default compose<React.ComponentType<OwnProps>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(NavBlock);
