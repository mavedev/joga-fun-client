import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'styles/Header/Header.module.scss';

/* Main header component. */
const Header: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div className={cn['Header-wrapper']}>
      <div className={cn['Header-wrapper__overlay']}>
        <h1 className={cn['Header-wrapper__title']}>
          {translator('Title')}
        </h1>
        <h3 className={cn['Header-wrapper__text']}>
          {translator('Description.1')}
        </h3>
        <p className={cn['Header-wrapper__text']}>
          {translator('Description.2')}
        </p>
      </div>
    </div>
  );
};

/* Use memoizing because the header is independent
   from the outside data. */
export default React.memo(Header);
