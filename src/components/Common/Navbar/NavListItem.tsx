import React from 'react';
import { Nav as BNav } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import { NavListItemStyles as styles } from 'styles';
import withCSSModule from 'react-css-modules';

/** Normal component props */
type OwnProps = {
  link: string;
  className: Maybe<string>;
};

/** Social button link */
const NavListItem: React.FC<OwnProps> = ({ link, className }) => (
  <li className='nav-item'>
    <BNav.Link href={link}>
      <i styleName='NavListItem__link' className={className} />
    </BNav.Link>
  </li>
);

export default withCSSModule(NavListItem, styles);
