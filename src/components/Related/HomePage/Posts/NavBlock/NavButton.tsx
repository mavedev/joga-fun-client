import React from 'react';
import withCSSModule from 'react-css-modules';
import { Button as BButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PostsNavButtonStyles as styles } from 'styles';

/** Normal component's props that are to be passed. */
type OwnProps = {
  text: string;
  disabled: boolean;
  action: (...args: any[]) => void;
};

/** Button inside the posts navigation block. */
const NavButton: React.FC<OwnProps> = ({ text, disabled, action }) => (
  <BButton
    variant='light'
    disabled={disabled}
    styleName='NavButton__BButton'
    onClick={action}
  >
    {text}
  </BButton>
);

export default withCSSModule(NavButton, styles);
