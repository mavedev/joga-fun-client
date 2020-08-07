import React, { useCallback } from 'react';
import { Button as BButton } from 'react-bootstrap';
import { i18n } from 'i18next';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/LangSwitcher.module.scss';

/* Normal props of the component. */
type OwnProps = {
  langs: string[];
  switcher: i18n;
  setLocale: (locale: string) => void;
};

/* Panel with buttons to switch interface language. */
const LangSwitcher: React.FC<OwnProps> = ({
  langs, switcher, setLocale
}: OwnProps) => {
  const switchLanguage = useCallback((language: string) => {
    switcher.changeLanguage(language);
    setLocale(language);
  }, [switcher, setLocale]);

  return (
    <div className={cn['MainWrapper']}>
      {langs.map((value) => (
        <div key={value} className={cn['BButtonWrapper']}>
          <BButton
            className='BButton'
            variant='light'
            onClick={() => { switchLanguage(value); }}
          >
            {value.toUpperCase()}
          </BButton>
        </div>
      ))}
    </div>
  );
};

export default LangSwitcher;
