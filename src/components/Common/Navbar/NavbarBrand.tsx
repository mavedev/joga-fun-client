import React from 'react';
import withCSSModule from 'react-css-modules';
import { Link } from 'react-router-dom';
import { NavbarBrand as BNavbarBrand } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import styles from 'styles/Common/Navbar/NavbarBrand.module.scss';

/** Bootstrap logo-like site name. */
const NavbarBrand: React.FC<{}> = () => (
  <BNavbarBrand>
    <Link
      styleName='NavbarBrand__link NavbarBrand__link--curved'
      to='/'
    >
      Joga.fun
    </Link>
  </BNavbarBrand>
);

export default withCSSModule(NavbarBrand, styles, { allowMultiple: true });
