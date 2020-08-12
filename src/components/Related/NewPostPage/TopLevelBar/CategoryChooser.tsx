import React from 'react';
import { useTranslation } from 'react-i18next';
import withCSSModules from 'react-css-modules';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { NewPostBoxCategoryChooserStyles as styles } from 'styles';

/** Normal component's props that are to be passed. */
type OwnProps = {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const CategoryChooser: React.FC<OwnProps> = ({
  categories,
  currentCategory,
  setCurrentCategory
}) => {
  const { t: translator } = useTranslation();

  const onSelectCategory = (eventKey: number): void => {
    setCurrentCategory(categories[eventKey]);
  };

  return (
    <div styleName='CategoryChooser__MainWrapper'>
      <div styleName='CategoryChooser__Body'>
        <div styleName='CategoryChooser__TextHintWrapper'>
          <p styleName='CategoryChooser__TextHint'>
            {`${translator('SetCategory')}:`}
          </p>
        </div>

        <DropdownButton
          variant='light'
          alignRight
          title={currentCategory}
          id='dropdown-menu-align-right'
          onSelect={onSelectCategory}
        >
          {categories.map((value: string, index: number) => (
            <Dropdown.Item key={value} eventKey={`${index}`}>
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default withCSSModules(CategoryChooser, styles);
