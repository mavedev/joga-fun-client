import React, { useState } from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import cn from 'styles/CategoryChooser.module.scss';

const CategoryChooser = () => {
  const [title, setTitle] = useState('');
  const categories = ['A', 'B', 'C'];
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['CategoryTextHintWrapper']}>
        <p className={cn['CategoryTextHint']}>Категория:</p>
      </div>

      <DropdownButton
        variant='light'
        alignRight
        title={title}
        id='dropdown-menu-align-right'
        onSelect={(eventKey: number) => { setTitle(categories[+eventKey]); }}
      >
        {
          categories.map((value: string, index: number) => (
            <Dropdown.Item key={value} eventKey={`${index}`}>
              {value}
            </Dropdown.Item>
          ))
        }
      </DropdownButton>
    </div>
  );
};

export default CategoryChooser;
