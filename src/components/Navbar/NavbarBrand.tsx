import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { NavbarBrand as BNavbarBrand } from 'react-bootstrap';

import cn from 'styles/Navbar/NavbarBrand.module.scss';

/* Logo for the navbar. */
const NavbarBrand: React.FC<{}> = () => (
  <BNavbarBrand>
    <Link
      className={cx(
        cn['NavbarBrand__link'],
        cn['NavbarBrand__link--curved']
      )}
      to='/'
    >
      Joga.fun
    </Link>
  </BNavbarBrand>
);

export default NavbarBrand;
