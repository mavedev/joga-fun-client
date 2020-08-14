import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCurrentManagedCategory
} from 'store';
import API from 'misc/api';
import TopLevelBar from './TopLevelBar';

/** Store state props type. */
type MapStatePropsType = {
  categories: string[];
  currentCategory: string;
  adminToken: string;
}
/** Store dispatch props type. */
type MapDispatchPropsType = {
  setCurrentCategory: (category: string) => void;
}
/** Normal component's props that are to be passed. */
type OwnPropsType = { editor: React.RefObject<ReactQuill>; };
/** All props type. */
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  categories: state.categories.categoriesList,
  currentCategory: state.categories.currentManagedCategory,
  adminToken: state.auth.jwt
});

const mapDispatchToProps: MapDispatchPropsType = ({
  setCurrentCategory: createSetCurrentManagedCategory
});

/** A wrapper for the TopLevelBar getting categories info from the store. */
const TopLevelContainer: React.FC<AllProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
  adminToken,
  editor
}) => {
  const publishAction = React.useCallback(() => {
    const body = editor.current ? editor.current.getEditor().getText() : '';
    API.createPost({
      body,
      title: 'Title',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg',
      category: currentCategory
    }, adminToken);
  }, [adminToken, currentCategory, editor]);

  return (
    <TopLevelBar
      categories={categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      publishAction={publishAction}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLevelContainer);
