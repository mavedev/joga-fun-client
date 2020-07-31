import React from 'react';
import {
  Card as BCard,
  Row as BRow
} from 'react-bootstrap';

import styles from 'styles/Categories.module.scss';
import CategoryItem from './CategoryItem';

/* Normal component's props that are to be passed. */
type OwnProps = { categories: string[]; };

const CategoriesList: React.FC<OwnProps> = ({ categories }: OwnProps) => (
  <div>
    {/* Third-party classes: my-4. */}
    <BCard className='my-4'>
      {/* Third-party classes: card-header. */}
      <h5 className='card-header'>Категории</h5>
      {/* The content of the card. */}
      <BCard.Body className={styles['ListWrapper--Centered']}>
        <BRow>
          {/* Full-width centered list. */}
          {/* Third-party classes: col-lg-12. */}
          <div className='col-lg-12'>
            {/* Third-party classes: list-unstyled mb-0. */}
            <ul className='list-unstyled mb-0'>
              {categories.map((value: string) => (
                <CategoryItem key={value} name={value} link='/' />
              ))}
            </ul>
          </div>
        </BRow>
      </BCard.Body>
    </BCard>
  </div>
);

export default CategoriesList;
