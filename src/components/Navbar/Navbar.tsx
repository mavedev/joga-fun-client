import React from 'react';
import { Navbar as BNavbar } from 'react-bootstrap';

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
    className={cn['navbar']}
    expand='lg'
    bg='dark'
    sticky='top'
  >
    <NavbarBrand />
    <NavbarToggle />
    <NavbarCollapse className={cn['NavbarCollapse__nav']}>
      <NavbarList>
        {/* The Facebook link. */}
        <NavListItem link='/' className='fa fa-facebook' />
        {/* The Twitter link. */}
        <NavListItem link='/' className='fa fa-twitter' />
        {/* The VK link. */}
        <NavListItem link='/' className='fa fa-vk' />
      </NavbarList>
    </NavbarCollapse>
  </BNavbar>
);

export default Navbar;
