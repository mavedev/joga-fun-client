import React from 'react';
import { connect } from 'react-redux';

import { AppState, createFilterSetCurrentCategory } from 'store';

/* Store state props type. */
type MapStateProps = { postsQuantity: number; };
/* Store dispatch props type. */
type MapDispatchProps = {
  setCurrentFilteredCategory: (category: string) => void;
};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStatetoProps = (state: AppState): MapStateProps => ({
  postsQuantity: state.posts.postsQuantity
});

const mapDispatchToProps: MapDispatchProps = {
  setCurrentFilteredCategory: createFilterSetCurrentCategory
};

const HomeContainer: React.FC<AllProps> = ({
  postsQuantity, setCurrentFilteredCategory
}: AllProps) => (
  <></>
);

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(HomeContainer);
