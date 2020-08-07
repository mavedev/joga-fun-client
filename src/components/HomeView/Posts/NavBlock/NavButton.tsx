import React from 'react';

import cn from 'styles/HomeView/Posts/NavBlock/NavButton.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = { text: string; action: (...args: any[]) => void; };

const NavButton: React.FC<OwnProps> = ({ text, action }: OwnProps) => (
  <button className={cn['NavButton']} onClick={action} type='button'>
    {text}
  </button>
);

export default NavButton;
