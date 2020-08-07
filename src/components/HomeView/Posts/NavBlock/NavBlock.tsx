import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'styles/HomeView/Posts/NavBlock/NavBlock.module.scss';
import NavButton from './NavButton';

/* Normal component's props that are to be passed. */
type OwnProps = {
  nextAction: (...args: any[]) => void;
  prevAction: (...args: any[]) => void;
};

const NavBlock: React.FC<OwnProps> = ({ nextAction, prevAction }: OwnProps) => {
  const { t: translator } = useTranslation();

  return (
    <div className={cn['NavBlock']}>
      <div className={cn['NavButtonWrapper']}>
        <NavButton text={translator('LoadPrev')} action={prevAction} />
      </div>
      <div className={cn['NavButtonWrapper']}>
        <NavButton text={translator('LoadMore')} action={nextAction} />
      </div>
    </div>
  );
};

export default React.memo(NavBlock);
