import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCategories
} from 'store';
import API from 'api';
import { retrieve } from 'dal';

/* Store state props type. */
type MapStateProps = { categories: string[]; };
/* Store dispatch props type. */
type MapDispatchProps = { setCategories: (categories: string[]) => void; };
/* Type for props that will be passed by the store. */
type AllInjectedProps = MapStateProps & MapDispatchProps;
/* All props type with children.
   Needed for static props check in the inner function. */
type AllProps = AllInjectedProps & { children?: React.ReactNode; };

/* State props connection. */
const mapStateToProps = (state: AppState): MapStateProps => ({
  categories: state.categories.categoriesList
});

/* State dispatch function connection. */
const mapDispatchToProps: MapDispatchProps = ({
  setCategories: createSetCategories
});

const Preloader: React.FC<AllProps> = ({
  categories,
  setCategories,
  children
}: AllProps) => {
  /* Stringified categories, needed for comparation. */
  const stringifiedCategories = JSON.stringify(categories);
  /* Loading categories. */
  useEffect(() => {
    API.getCategories().then((response) => {
      setCategories(retrieve(response.data, [] as string[]));
    });
  }, [stringifiedCategories, setCategories]);

  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preloader);
