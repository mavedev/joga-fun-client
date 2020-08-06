import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCurrentManagedCategory
} from 'store';
import cn from 'styles/NewPostView/TopLevelBar/TopLevelContainer.module.scss';
import CategoryChooser from './CategoryChooser';
import PublishButton from './PublishButton';


/* Store state props type. */
type MapStatePropsType = {
  categories: string[];
  currentCategory: string;
}
/* Store dispatch props type. */
type MapDispatchPropsType = {
  setCurrentCategory: (category: string) => void;
}
/* Normal component's props that are to be passed. */
type OwnPropsType = {}
/* All props type. */
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  categories: state.categories.categoriesList,
  currentCategory: state.categories.currentManagedCategory
});

const mapDispatchToProps: MapDispatchPropsType = ({
  setCurrentCategory: createSetCurrentManagedCategory
});

/* A wrapper for the CategoriesChooser and the PusblishButton
   getting categories info from the store. */
const TopLevelContainer: React.FC<AllProps> = ({
  categories,
  currentCategory,
  setCurrentCategory
}: AllProps) => (
  <div className={cn['MainWrapper']}>
    <div className={cn['CategoryChooserWrapper']}>
      <CategoryChooser
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </div>
    <div className={cn['PublishButtonWrapper']}>
      <PublishButton />
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLevelContainer);
