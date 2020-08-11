import React from 'react';

import 'styles/overrides/bootstrap.scss';

/** Normal component props with children.
   Needed for static type check. */
type OwnProps = { children: React.ReactNode; };

/** Inner list of links. */
const NavbarList: React.FC<OwnProps> = ({ children }) => (
  <ul className='nav navbar-nav ml-auto'>
    {children}
  </ul>
);

export default NavbarList;
