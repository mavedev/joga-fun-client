import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import CategoriesList from './CategoriesList';

/* Store state props type. */
type MapStateProps = { categories: string[]; };
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  categories: state.categoryChooser.categories
});

/* A wrapper for the Categories component getting categories from the store. */
const CategoriesContainer: React.FC<AllProps> = ({ categories }: AllProps) => (
  <CategoriesList categories={categories} />
);

export default connect(mapStateToProps)(CategoriesContainer);
