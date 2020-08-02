import React from 'react';
import cx from 'classnames';
import { Navbar as BNavbar, Button as BButton } from 'react-bootstrap';

import * as constants from 'appConstants';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/Navbar.module.scss';
import NavbarList from './NavbarList';
import NavListItem from './NavListItem';
import NavbarBrand from './NavbarBrand';
import NavbarToggle from './NavbarToggle';
import NavbarCollapse from './NavbarCollapse';

/* Top navbar. */
const Navbar: React.FC<{}> = () => (
  <BNavbar
    className={cx(cn['navbar'])}
    expand='lg'
    bg='dark'
    sticky='top'
  >
    {/* <div>
      <BButton>EN</BButton>
      <BButton>RU</BButton>
      <BButton>UK</BButton>
    </div> */}
    <NavbarBrand />
    <NavbarBrand />
    <NavbarBrand />
    <NavbarToggle />
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

export default Navbar;
