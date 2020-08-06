import React, { useCallback } from 'react';
import { Button as BButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import { i18n } from 'i18next';

import { createSetLocale } from 'store';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/LangSwitcher.module.scss';

/* Store state props type. */
type MapStateProps = {};
/* Store dispatch props type. */
type MapDispatchProps = { setLocale: (locale: string) => void; };
/* Normal props of the component. */
type OwnProps = { langs: string[]; switcher: i18n; };
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapDispatchToProps: MapDispatchProps = {
  setLocale: createSetLocale
};

/* Panel with buttons to switch interface language. */
const LangSwitcher: React.FC<AllProps> = ({
  langs, switcher, setLocale
}: AllProps) => {
  const switchLanguage = useCallback((language: string) => {
    switcher.changeLanguage(language);
    setLocale(language);
  }, [switcher]);

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

export default connect(null, mapDispatchToProps)(LangSwitcher);
