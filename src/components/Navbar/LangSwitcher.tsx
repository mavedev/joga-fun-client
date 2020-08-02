import React from 'react';
import { Button as BButton } from 'react-bootstrap';

/* Normal props of the component. */
type OwnProps = { langs: string[]; };

/* Panel with buttons to switch interface language. */
const LangSwitcher: React.FC<OwnProps> = ({ langs }: OwnProps) => (
  <div>
    {langs.map((value) => <BButton>{value.toUpperCase()}</BButton>)}
  </div>
);

export default LangSwitcher;
