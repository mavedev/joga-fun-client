import React from 'react';
import { Navbar as BNavbar } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/NavbarToggle.module.scss';

/* The 'show/hide' button of the navbar. */
const NavbarToggle: React.FC<{}> = () => (
  <BNavbar.Toggle
    className={cn['NavbarToggle']}
    aria-controls='basic-navbar-nav'
  />
);

export default NavbarToggle;
