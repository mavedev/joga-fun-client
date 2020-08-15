import React from 'react';
import { connect } from 'react-redux';

import API from 'misc/api';
import { AppState, createAddCategory } from 'store';
import NewCategoryWindow from './NewCategoryWindow';

/** Store state props type. */
type MapStatePropsType = { adminToken: string; };
/** Store dispatch props type. */
type MapDispatchPropsType = { addCategory: (category: string) => void; };
/** Normal component's props that are to be passed. */
type OwnPropsType = { doAfter: () => void; };
/** All props type. */
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  adminToken: state.auth.jwt
});

const mapDispatchToProps: MapDispatchPropsType = {
  addCategory: createAddCategory
};

const NewCategoryWindowContainer: React.FC<AllProps> = ({
  adminToken, addCategory, doAfter
}) => {
  const createNewCategory = React.useCallback((category: string) => {
    API.createCategory(category, adminToken).then(() => {
      addCategory(category);
      doAfter();
    });
  }, []);

  return (
    <NewCategoryWindow createCategoryCallback={createNewCategory} />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategoryWindowContainer);
