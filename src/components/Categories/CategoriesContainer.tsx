import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import CategoriesList from './CategoriesList';

type MapStateProps = { categories: string[]; };
type MapDispatchProps = {};
type OwnProps = {};
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  categories: state.categoryChooser.categories
});

const CategoriesContainer: React.FC<AllProps> = ({ categories }: AllProps) => (
  <CategoriesList categories={categories} />
);

export default connect(mapStateToProps)(CategoriesContainer);
