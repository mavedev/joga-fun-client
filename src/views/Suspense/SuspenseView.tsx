import React from 'react';

import loader from 'assets/svg/loader.svg';

/* A component to display while loading. */
const SuspenseView: React.FC<{}> = () => (
  <div className='MainWrapper'>
    <img src={loader} alt='Loading...' />
  </div>
);

export default SuspenseView;
