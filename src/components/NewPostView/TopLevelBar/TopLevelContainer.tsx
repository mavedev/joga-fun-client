import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCategories,
  createSetCurrentCategory
} from 'store';
import API from 'api';
import { retrieve } from 'dal';

import cn from 'styles/NewPostView/TopLevelBar/TopLevelContainer.module.scss';
import CategoryChooser from './CategoryChooser';
import PublishButton from './PublishButton';


type MapStatePropsType = {
  categories: string[];
  currentCategory: string;
}

type MapDispatchPropsType = {
  setCategories: (categories: string[]) => void;
  setCurrentCategory: (category: string) => void;
}

type OwnPropsType = {}
type AllProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const mapStateToProps = (state: AppState): MapStatePropsType => ({
  categories: state.categoryChooser.categories,
  currentCategory: state.categoryChooser.currentCategory
});

const mapDispatchToProps: MapDispatchPropsType = ({
  setCategories: createSetCategories,
  setCurrentCategory: createSetCurrentCategory
});

const TopLevelContainer: React.FC<AllProps> = ({
  categories,
  setCategories,
  currentCategory,
  setCurrentCategory
}: AllProps) => {
  const stringifiedCategories = JSON.stringify(categories);
  useEffect(() => {
    API.getCategories().then((response) => {
      setCategories(retrieve(response.data, [] as string[]));
    });
  }, [stringifiedCategories, setCategories]);

  return (
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLevelContainer);
