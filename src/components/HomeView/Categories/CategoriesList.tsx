import React from 'react';
import { Card as BCard, Row as BRow } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/Categories/CategoriesList.module.scss';

import CategoryItem from './CategoryItem';

/* Normal component's props that are to be passed. */
type OwnProps = {
  categories: string[];
  setCurrentFilteredCategory: (category: string | null) => void;
  setCurrentPostChunkNumber: (chunk: number) => void;
  scrollAction: () => void;
};

const CategoriesList: React.FC<OwnProps> = ({
  categories,
  setCurrentFilteredCategory,
  setCurrentPostChunkNumber,
  scrollAction
}: OwnProps) => {
  const { t: translator } = useTranslation();
  const filterCategories = React.useCallback((category: string | null) => {
    setCurrentFilteredCategory(category);
    setCurrentPostChunkNumber(1);
    scrollAction();
  }, [
    setCurrentFilteredCategory,
    setCurrentPostChunkNumber,
    scrollAction
  ]);

  return (
    <div>
      <BCard className='my-4'>
        <h5 className='card-header'>{translator('Categories')}</h5>
        <BCard.Body className={cn['ListWrapper--Centered']}>
          <BRow>
            <div className='col-lg-12'>
              <ul className='list-unstyled mb-0'>
                <CategoryItem
                  action={() => { filterCategories(null); }}
                  name={translator('CategoriesAll')}
                />
                {categories.map((value: string) => (
                  <CategoryItem
                    action={() => { filterCategories(value); }}
                    key={value}
                    name={value}
                  />
                ))}
              </ul>
            </div>
          </BRow>
        </BCard.Body>
      </BCard>
    </div>
  );
};

/* Use memoizing because categories updates really seldom. */
export default React.memo(CategoriesList);
