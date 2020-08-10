import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCurrentFilteredCategory,
  createSetCurrentPostChunkNumber
} from 'store';
import CategoriesList from './CategoriesList';

/** Store state props type. */
type MapStateProps = { categories: string[]; };
/** Store dispatch props type. */
type MapDispatchProps = {
  setCurrentFilteredCategory: (category: string | null) => void;
  setCurrentPostChunkNumber: (chunk: number) => void;
};
/** Normal component's props that are to be passed. */
type OwnProps = { scrollAction: () => void; };
/** All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  categories: state.categories.categoriesList
});

const mapDispatchToProps: MapDispatchProps = {
  setCurrentFilteredCategory: createSetCurrentFilteredCategory,
  setCurrentPostChunkNumber: createSetCurrentPostChunkNumber
};

/** A wrapper for the Categories component getting categories from the store. */
const CategoriesContainer: React.FC<AllProps> = ({
  categories,
  setCurrentFilteredCategory,
  setCurrentPostChunkNumber,
  scrollAction
}: AllProps) => (
  <CategoriesList
    categories={categories}
    setCurrentFilteredCategory={setCurrentFilteredCategory}
    setCurrentPostChunkNumber={setCurrentPostChunkNumber}
    scrollAction={scrollAction}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
