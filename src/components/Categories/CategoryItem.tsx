import React from 'react';

import cn from 'styles/Categories/CategoryItem.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = {
  name: string;
  action: (category: string) => void;
};

/* List item with name and action to do on clicking the link within. */
const CategoryItem: React.FC<OwnProps> = ({ name, action }: OwnProps) => (
  <li>
    <div className={cn['CategoryItem__ButtonWrapper']}>
      <button
        className={cn['CategoryItem__Button']}
        type='button'
        onClick={() => { action(name); }}
      >
        {name}
      </button>
    </div>
  </li>
);

export default React.memo(CategoryItem);
