import React, { useCallback } from 'react';
import withCSSModule from 'react-css-modules';
import { Button as BButton } from 'react-bootstrap';
import { i18n } from 'i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'styles/Common/Navbar/LangSwitcher/LangSwitcher.module.scss';

/** Normal props of the component. */
type OwnProps = {
  langs: string[];
  switcher: i18n;
  setLocale: (locale: string) => void;
};

/** Panel with buttons to switch interface language. */
const LangSwitcher: React.FC<OwnProps> = ({
  langs, switcher, setLocale
}: OwnProps) => {
  const switchLanguage = useCallback((language: string) => {
    switcher.changeLanguage(language);
    setLocale(language);
  }, [switcher, setLocale]);

  return (
    <div styleName='MainWrapper'>
      {langs.map((value) => (
        <div key={value} styleName='BButtonWrapper'>
          <BButton
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

export default withCSSModule(LangSwitcher, styles);
