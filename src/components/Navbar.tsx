import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  Navbar as BNavbar,
  NavbarBrand as BNavbarBrand,
  Nav as BNav
} from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import styles from 'styles/Navbar/Navbar.module.scss';

const Navbar = () => (
  <BNavbar
    className={styles['navbar']}
    expand='lg'
    bg='dark'
    sticky='top'
  >

    {/* Bootstrap logo-like site name. */}
    <BNavbarBrand>
      <Link
        className={cx(
          styles['navbar__link'],
          styles['navbar__link_curved']
        )}
        to='/'
      >
        Joga.fun
      </Link>
    </BNavbarBrand>

    {/* The 'show/hide' button of the navbar. */}
    <BNavbar.Toggle
      className={styles['navbar__toggler']}
      aria-controls='basic-navbar-nav'
    />

    {/* Center-aligned nav items. */}
    <BNavbar.Collapse className={styles['navbar__collapse']}>
      {/* Bootstrap navbar link wrapper. */}
      {/* Third-party classes: navbar-nav, ml-auto. */}
      <BNav className={cx(
        styles['navbar__nav'],
        'navbar-nav',
        'ml-auto'
      )}
      >
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
      </BNav>
    </BNavbar.Collapse>
  </BNavbar>
);

export default Navbar;
