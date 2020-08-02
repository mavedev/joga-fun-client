import React from 'react';
import cx from 'classnames';
import {
  Navbar as BNavbar,
  Nav as BNav
} from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/Navbar.module.scss';
import NavbarList from './NavbarList';
import NavbarBrand from './NavbarBrand';
import NavbarToggle from './NavbarToggle';
import NavbarCollapse from './NavbarCollapse';

const Navbar = () => (
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
        {/* Third-party classes: nav-item. */}
        <li className='nav-item'>
          <BNav.Link href='/'>
            {/* Third-party classes: fa-*. */}
            <i className={cx(
              cn['navbar__link'],
              'fa',
              'fa-facebook'
            )}
            />
          </BNav.Link>
        </li>
        {/* The Twitter link. */}
        {/* Third-party classes: nav-item. */}
        <li className='nav-item'>
          <BNav.Link href='/'>
            {/* Third-party classes: fa-*. */}
            <i className={cx(
              cn['navbar__link'],
              'fa',
              'fa-twitter'
            )}
            />
          </BNav.Link>
        </li>
        {/* The VK link. */}
        {/* Third-party classes: nav-item. */}
        <li className='nav-item'>
          <BNav.Link href='/'>
            {/* Third-party classes: fa-*. */}
            <i className={cx(
              cn['navbar__link'],
              'fa',
              'fa-vk'
            )}
            />
          </BNav.Link>
        </li>
      </NavbarList>
    </NavbarCollapse>
  </BNavbar>
);

export default Navbar;
