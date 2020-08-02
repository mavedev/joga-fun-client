import React from 'react';

import loader from 'assets/svg/loader.svg';

import cn from 'styles/Suspense/SuspenseView.module.scss';

/* A component to display while loading. */
const SuspenseView: React.FC<{}> = () => (
  <div className={cn['MainWrapper']}>
    <img src={loader} alt='Loading...' />
  </div>
);

export default SuspenseView;
