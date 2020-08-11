import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import Sidebar from './Sidebar';

/** Store state props type. */
type MapStateProps = { locale: string; };
/** Store dispatch props type. */
type MapDispatchProps = {};
/** Normal props of the component. */
type OwnProps = { scrollAction: () => void; };
/** All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  locale: state.locales.locale
});

/** A wrapper for the Sidebar component getting the locale from the store. */
const SidebarContainer: React.FC<AllProps> = ({ locale, scrollAction }) => (
  <Sidebar scrollAction={scrollAction} locale={locale} />
);

export default connect(mapStateToProps)(SidebarContainer);
