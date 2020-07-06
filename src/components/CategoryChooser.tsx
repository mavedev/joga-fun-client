import React from 'react';

import { Dropdown } from 'react-bootstrap';

import cn from 'styles/CategoryChooser.module.scss';

const CategoryChooser = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['CategoryTextHintWrapper']}>
      <p className={cn['CategoryTextHint']}>Категория:</p>
    </div>

    <Dropdown>
      <Dropdown.Toggle variant='light' id='dropdown-basic'>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default CategoryChooser;
