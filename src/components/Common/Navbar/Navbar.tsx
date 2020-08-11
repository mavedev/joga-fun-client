import React from 'react';
import { compose } from 'redux';
import { Navbar as BNavbar } from 'react-bootstrap';
import i18next from 'i18next';

import * as constants from 'invariants';

import 'styles/overrides/bootstrap.scss';
import styles from 'styles/Common/Navbar/Navbar.module.scss';
import { withCSSModulePartiallyApplied } from 'misc/hoc';
import NavbarList from './NavbarList';
import NavListItem from './NavListItem';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import LangSwitcherContainer from './LangSwitcher';

/* Top navbar. */
const Navbar: React.FC<{}> = () => (
  <BNavbar
    styleName='navbar'
    expand='lg'
    bg='dark'
    sticky='top'
  >
    <LangSwitcherContainer langs={constants.LANGS_LIST} switcher={i18next} />
    <NavbarBrand />
    <NavbarCollapse>
      <NavbarList>
        {/* The Facebook link. */}
        <NavListItem
          link={process.env.REACT_APP_LINK_FB || '/'}
          className='fa fa-facebook'
        />
        {/* The Twitter link. */}
        <NavListItem
          link={process.env.REACT_APP_LINK_TW || '/'}
          className='fa fa-twitter'
        />
        {/* The VK link. */}
        <NavListItem
          link={process.env.REACT_APP_LINK_VK || '/'}
          className='fa fa-vk'
        />
      </NavbarList>
    </NavbarCollapse>
  </BNavbar>
);

/* Use memoizing because the navbar is independent
   from the outside data. */
export default compose<React.ComponentType<{}>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(Navbar);
