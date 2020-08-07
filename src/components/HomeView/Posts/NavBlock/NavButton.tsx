import React from 'react';

import cn from 'styles/HomeView/Posts/NavBlock/NavButton.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = {
  text: string;
  disabled: boolean;
  action: (...args: any[]) => void;
};

/* Button inside the posts navigation block. */
const NavButton: React.FC<OwnProps> = ({
  text, disabled, action
}: OwnProps) => (
  <button
    type='button'
    disabled={disabled}
    className={cn['NavButton']}
    onClick={action}
  >
    {text}
  </button>
);

export default NavButton;
