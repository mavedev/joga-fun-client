import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import cn from 'styles/CategoryChooser.module.scss';

const CategoryChooser = () => {
  const [title, setTitle] = useState('');
  // const categoriesRef = useRef(null);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/v1.0/categories/50')
  //     .then((result) => {
  //       const categories = result.data;
  //       alert(JSON.stringify(categories));
  //     });
  // }, []);


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
        onSelect={() => { setTitle('categories[+eventKey]'); }}
      >
        {
          ['he'].map((value: string, index: number) => (
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
