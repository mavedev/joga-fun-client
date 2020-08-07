import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'styles/HomeView/Posts/NavBlock/NavBlock.module.scss';
import NavButton from './NavButton';

const NavBlock: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div className={styles.NavBlock}>
      <div className={styles.NavButtonWrapper}>
        <NavButton text={translator('LoadPrev')} action={() => {}} />
      </div>
      <div className={styles.NavButtonWrapper}>
        <NavButton text={translator('LoadMore')} action={() => {}} />
      </div>
    </div>
  );
};

export default NavBlock;
