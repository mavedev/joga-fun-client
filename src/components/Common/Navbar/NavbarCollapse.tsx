import React from 'react';
import { Navbar as BNavbar, Nav as BNav } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';

/** Normal component props with children.
   Needed for static type check. */
type OwnProps = { children: React.ReactNode; };

/** Center-aligned nav items. */
const NavbarCollapse: React.FC<OwnProps> = ({ children }) => (
  <BNavbar.Collapse>
    <BNav className='navbar-nav ml-auto'>
      {children}
    </BNav>
  </BNavbar.Collapse>
);

export default NavbarCollapse;
