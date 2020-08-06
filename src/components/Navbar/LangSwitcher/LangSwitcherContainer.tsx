import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18next';

import { createSetLocale } from 'store';
import LangSwitcher from './LangSwitcher';

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

/* A wrapper for the LangSwitcher component getting the locale from the store. */
const LangSwitcherContainer: React.FC<AllProps> = ({
  langs, switcher, setLocale
}: AllProps) => (
  <LangSwitcher
    langs={langs}
    switcher={switcher}
    setLocale={setLocale}
  />
);

export default connect(null, mapDispatchToProps)(LangSwitcherContainer);
