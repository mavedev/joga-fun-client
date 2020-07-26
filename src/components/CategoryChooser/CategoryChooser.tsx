import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import cn from 'styles/CategoryChooser.module.scss';

function CategoryChooser({
  categories,
  currentCategory,
  setCurrentCategory
}: InferProps<typeof CategoryChooser.propTypes>) {
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['CategoryTextHintWrapper']}>
        <p className={cn['CategoryTextHint']}>Категория:</p>
      </div>

      <DropdownButton
        variant='light'
        alignRight
        title={currentCategory}
        id='dropdown-menu-align-right'
        onSelect={(eventKey: number) => { alert(eventKey); }}
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
}

CategoryChooser.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCategory: PropTypes.string.isRequired,
  setCurrentCategory: PropTypes.func.isRequired
};

export default CategoryChooser;
