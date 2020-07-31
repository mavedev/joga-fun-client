import React from 'react';

/* Normal component's props that are to be passed. */
type OwnProps = { name: string; link: string; };

/* List item with name and action to do on clicking the link within. */
const CategoryItem: React.FC<OwnProps> = ({ name, link }: OwnProps) => (
  <li>
    <a href={link}>{name}</a>
  </li>
);

export default React.memo(CategoryItem);
