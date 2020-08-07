import React from 'react';

/* Normal component's props that are to be passed. */
type OwnProps = { text: string; action: () => void; };

const NavButton: React.FC<OwnProps> = ({ text, action }: OwnProps) => (
  <button onClick={action} type='button'>{text}</button>
);

export default NavButton;
