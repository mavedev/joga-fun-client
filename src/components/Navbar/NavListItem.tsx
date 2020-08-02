import React from 'react';
import cx from 'classnames';
import { Nav as BNav } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/NavListItem.module.scss';

/* Normal component props */
type OwnProps = {
  link: string;
  className: string | undefined;
};

/* Social button link */
const NavListItem: React.FC<OwnProps> = ({ link, className }: OwnProps) => (
  <li className='nav-item'>
    <BNav.Link href={link}>
      <i className={cx(cn['NavListItem__link'], className)} />
    </BNav.Link>
  </li>
);

export default NavListItem;
