import React from 'react';

type OwnProps = { name: string; link: string; };

const CategoryItem: React.FC<OwnProps> = ({ name, link }: OwnProps) => (
  <li>
    <a href={link}>{name}</a>
  </li>
);

export default CategoryItem;
