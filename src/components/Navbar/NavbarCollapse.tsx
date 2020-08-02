import React from 'react';
import cx from 'classnames';
import { Navbar as BNavbar, Nav as BNav } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';

/* Normal component props with children.
   Needed for static type check. */
type OwnProps = {
  children: React.ReactNode;
  className: string | undefined;
};

/* Center-aligned nav items. */
const NavbarCollapse: React.FC<OwnProps> = ({ children, className }: OwnProps) => (
  <BNavbar.Collapse>
    {/* Bootstrap navbar link wrapper. */}
    {/* Third-party classes: navbar-nav, ml-auto. */}
    <BNav className={cx('navbar-nav', 'ml-auto', className)}>
      {children}
    </BNav>
  </BNavbar.Collapse>
);

export default NavbarCollapse;
