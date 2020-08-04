import React from 'react';
import { connect } from 'react-redux';

import { AppState, createFilterSetCurrentCategory } from 'store';

/* Store state props type. */
type MapStateProps = {
  postsQuantity: number;
  currentCategory: string | null;
};
/* Store dispatch props type. */
type MapDispatchProps = {
  setCurrentFilteredCategory: (category: string) => void;
};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStatetoProps = (state: AppState): MapStateProps => ({
  postsQuantity: state.posts.postsQuantity,
  currentCategory: state.categories.currentFilteredCategory
});

const mapDispatchToProps: MapDispatchProps = {
  setCurrentFilteredCategory: createFilterSetCurrentCategory
};

const HomeContainer: React.FC<AllProps> = ({
  postsQuantity, currentCategory, setCurrentFilteredCategory,
}: AllProps) => (
  <></>
);

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(HomeContainer);
