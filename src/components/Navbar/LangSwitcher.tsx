import React from 'react';
import { Button as BButton } from 'react-bootstrap';

import 'styles/overrides/bootstrap.scss';
import cn from 'styles/Navbar/LangSwitcher.module.scss';

/* Normal props of the component. */
type OwnProps = { langs: string[]; };

/* Panel with buttons to switch interface language. */
const LangSwitcher: React.FC<OwnProps> = ({ langs }: OwnProps) => (
  <div className={cn['MainWrapper']}>
    {langs.map((value) => (
      <div key={value} className={cn['BButtonWrapper']}>
        <BButton className='BButton' variant='light'>
          {value.toUpperCase()}
        </BButton>
      </div>
    ))}
  </div>
);

export default LangSwitcher;
