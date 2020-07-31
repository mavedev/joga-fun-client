import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import cn from 'styles/NewPostView/TopLevelBar/CategoryChooser.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const CategoryChooser: React.FC<OwnProps> = ({
  categories,
  currentCategory,
  setCurrentCategory
}: OwnProps) => {
  const onSelectCategory = (eventKey: number): void => {
    setCurrentCategory(categories[eventKey]);
  };

  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['Body']}>
        <div className={cn['CategoryTextHintWrapper']}>
          <p className={cn['CategoryTextHint']}>
            Определить в категорию:
          </p>
        </div>

        <DropdownButton
          variant='light'
          alignRight
          title={currentCategory}
          id='dropdown-menu-align-right'
          onSelect={onSelectCategory}
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
    </div>
  );
};

export default CategoryChooser;
