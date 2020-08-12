import React from 'react';
import { Nav as BNav } from 'react-bootstrap';

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
      <i styleName='NavListItem__Link' className={className} />
    </BNav.Link>
  </li>
);

export default withCSSModule(NavListItem, styles);
