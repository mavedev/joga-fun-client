import React from 'react';
import {
  Card as BCard,
  Row as BRow
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/Categories/CategoriesList.module.scss';

import CategoryItem from './CategoryItem';

/* Normal component's props that are to be passed. */
type OwnProps = { categories: string[]; };

const CategoriesList: React.FC<OwnProps> = ({ categories }: OwnProps) => (
  <div>
    <BCard className='my-4'>
      <h5 className='card-header'>Категории</h5>
      <BCard.Body className={cn['ListWrapper--Centered']}>
        <BRow>
          <div className='col-lg-12'>
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
