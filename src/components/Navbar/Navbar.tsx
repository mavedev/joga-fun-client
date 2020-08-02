import React from 'react';
import cx from 'classnames';
import {
  Navbar as BNavbar,
  Nav as BNav
} from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import styles from 'styles/Navbar/Navbar.module.scss';
import NavbarBrand from './NavbarBrand';
import NavbarToggle from './NavbarToggle';
import NavbarCollapse from './NavbarCollapse';

const Navbar = () => (
  <BNavbar
    className={styles['navbar']}
    expand='lg'
    bg='dark'
    sticky='top'
  >
    <NavbarBrand />
    <NavbarToggle />

    <NavbarCollapse>
      {/* Inner list of links. */}
      {/* Third-party classes: nav, navbar-nav, ml-auto. */}
      <ul className={cx(
        'nav',
        'navbar-nav',
        'ml-auto'
      )}
      >
        {/* The Facebook link. */}
        {/* Third-party classes: nav-item. */}
        <li className='nav-item'>
          <BNav.Link href='/'>
            {/* Third-party classes: fa-*. */}
            <i className={cx(
              styles['navbar__link'],
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
              styles['navbar__link'],
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
              styles['navbar__link'],
              'fa',
              'fa-vk'
            )}
            />
          </BNav.Link>
        </li>
      </ul>
    </NavbarCollapse>
  </BNavbar>
);

export default Navbar;
