import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  setCategories,
  setCurrentCategory
} from 'store';

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
  setCategories,
  setCurrentCategory
});

const CategoriesContainer: React.FC<AllProps> = (props) => (
  <>
    <CategoryChooser />
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
