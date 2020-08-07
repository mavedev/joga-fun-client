import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'styles/HomeView/Posts/NavBlock/NavBlock.module.scss';

import NavButton from './NavButton';

const NavBlock: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div className={cn['NavBlock']}>
      <div className='NavButtonWrapper'>
        <NavButton text={translator('LoadPrev')} action={() => {}} />
      </div>
      <div className='NavButtonWrapper'>
        <NavButton text={translator('LoadMore')} action={() => {}} />
      </div>
    </div>
  );
};
export default NavBlock;
