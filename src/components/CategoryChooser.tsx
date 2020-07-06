import React from 'react';

import { Dropdown } from 'react-bootstrap';

const CategoryChooser = () => (
  <div className='MainWrapper'>
    <p>Категория:</p>
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
