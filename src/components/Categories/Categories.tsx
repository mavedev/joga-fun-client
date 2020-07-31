import React from 'react';
import {
  Card as BCard,
  Row as BRow
} from 'react-bootstrap';

import styles from 'styles/Categories.module.scss';

type OwnProps = { categories: string[]; };

const Categories: React.FC<OwnProps> = ({ categories }: OwnProps) => (
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
              <li>
                <a href='/'>Категория 1</a>
              </li>
              <li>
                <a href='/'>Категория 2</a>
              </li>
              <li>
                <a href='/'>Категория 3</a>
              </li>
            </ul>
          </div>
        </BRow>
      </BCard.Body>
    </BCard>
  </div>
);

export default Categories;
