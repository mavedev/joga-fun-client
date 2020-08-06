import React from 'react';
import cx from 'classnames';
import { Navbar as BNavbar } from 'react-bootstrap';
import i18next from 'i18next';

import * as constants from 'appConstants';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/Navbar.module.scss';
import NavbarList from './NavbarList';
import NavListItem from './NavListItem';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import LangSwitcherContainer from './LangSwitcher';

/* Top navbar. */
const Navbar: React.FC<{}> = () => (
  <BNavbar
    className={cx(cn['navbar'])}
    expand='lg'
    bg='dark'
    sticky='top'
  >
    <LangSwitcherContainer langs={constants.LANGS_LIST} switcher={i18next} />
    <NavbarBrand />
    <NavbarCollapse className={cn['NavbarCollapse__nav']}>
      <NavbarList>
        {/* The Facebook link. */}
        <NavListItem link={constants.LINK_FB} className='fa fa-facebook' />
        {/* The Twitter link. */}
        <NavListItem link={constants.LINK_TW} className='fa fa-twitter' />
        {/* The VK link. */}
        <NavListItem link={constants.LINK_VK} className='fa fa-vk' />
      </NavbarList>
    </NavbarCollapse>
  </BNavbar>
);

/* Use memoizing because the navbar is independent
   from the outside data. */
export default React.memo(Navbar);
