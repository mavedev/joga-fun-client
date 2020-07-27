import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCategories,
  createSetCurrentCategory
} from 'store';
import API from 'api';
import { retrieve } from 'dal';

import CategoryChooser from './CategoryChooser';

type MapStatePropsType = {
  categories: string[];
  currentCategory: string;
}

type MapDispatchPropsType = {
  setCategories: (categories: string[]) => void;
  setCurrentCategory: (category: string) => void;
}

type OwnPropsType = {}
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  categories: state.categoryChooser.categories,
  currentCategory: state.categoryChooser.currentCategory
});

const mapDispatchToProps: MapDispatchPropsType = ({
  setCategories: createSetCategories,
  setCurrentCategory: createSetCurrentCategory
});

const CategoriesContainer: React.FC<AllProps> = ({
  categories,
  setCategories,
  currentCategory,
  setCurrentCategory
}: AllProps) => {
  const stringifiedCategories = JSON.stringify(categories);
  useEffect(() => {
    API.getCategories().then((response) => {
      setCategories(retrieve(response.data, [] as string[]));
    });
  }, [stringifiedCategories, setCategories]);

  return (
    <>
      <CategoryChooser
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
