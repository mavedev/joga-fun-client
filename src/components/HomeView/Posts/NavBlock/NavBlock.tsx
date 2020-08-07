import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'styles/HomeView/Posts/NavBlock/NavBlock.module.scss';
import NavButton from './NavButton';

/* Normal component's props that are to be passed. */
type OwnProps = {
  enablePrev: boolean;
  enableNext: boolean;
  nextAction: (...args: any[]) => void;
  prevAction: (...args: any[]) => void;
};

/** The post block's navigation buttons node. */
const NavBlock: React.FC<OwnProps> = ({
  enablePrev, enableNext, nextAction, prevAction
}: OwnProps) => {
  const { t: translator } = useTranslation();

  return (
    <div className={cn['NavBlock']}>
      <div className={cn['NavButtonWrapper']}>
        <NavButton
          text={translator('LoadPrev')}
          action={prevAction}
          disabled={!enablePrev}
        />
      </div>
      <div className={cn['NavButtonWrapper']}>
        <NavButton
          text={translator('LoadMore')}
          action={nextAction}
          disabled={!enableNext}
        />
      </div>
    </div>
  );
};

export default React.memo(NavBlock);
