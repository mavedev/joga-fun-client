import React from 'react';
import cx from 'classnames';
import { Navbar as BNavbar, Nav as BNav } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import styles from 'styles/Navbar/Navbar.module.scss';

/* Normal component props with children.
   Needed for static type check. */
type OwnProps = { children: React.ReactNode; };

/* Center-aligned nav items. */
const NavbarCollapse: React.FC<OwnProps> = ({ children }: OwnProps) => (
  <BNavbar.Collapse>
    {/* Bootstrap navbar link wrapper. */}
    {/* Third-party classes: navbar-nav, ml-auto. */}
    <BNav className={cx(
      styles['navbar__nav'],
      'navbar-nav',
      'ml-auto'
    )}
    >
      {children}
    </BNav>
  </BNavbar.Collapse>
);

export default NavbarCollapse;
