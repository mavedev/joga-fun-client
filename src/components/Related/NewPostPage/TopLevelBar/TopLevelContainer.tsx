import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCurrentManagedCategory
} from 'store';
import TopLevelBar from './TopLevelBar';

/** Store state props type. */
type MapStatePropsType = {
  categories: string[];
  currentCategory: string;
}
/** Store dispatch props type. */
type MapDispatchPropsType = {
  setCurrentCategory: (category: string) => void;
}
/** Normal component's props that are to be passed. */
type OwnPropsType = {}
/** All props type. */
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  categories: state.categories.categoriesList,
  currentCategory: state.categories.currentManagedCategory
});

const mapDispatchToProps: MapDispatchPropsType = ({
  setCurrentCategory: createSetCurrentManagedCategory
});

/** A wrapper for the TopLevelBar getting categories info from the store. */
const TopLevelContainer: React.FC<AllProps> = ({
  categories,
  currentCategory,
  setCurrentCategory
}: AllProps) => (
  <TopLevelBar
    categories={categories}
    currentCategory={currentCategory}
    setCurrentCategory={setCurrentCategory}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLevelContainer);
