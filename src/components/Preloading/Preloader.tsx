import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCategories,
  createSetPostsQuantity,
  createSetCurrentPostChunk,
} from 'store';
import API from 'api';
import {
  retrieve,
  CategoriesDTO,
  PostDTO as Post,
  PostsDTO
} from 'dal';

/* Store state props type. */
type MapStateProps = {
  categories: string[];
  postsQuantity: number;
  currentFilteredCategory: string | null;
  currentPostsChunkNumber: number;
  currentPostsChunk: Post[];
};
/* Store dispatch props type. */
type MapDispatchProps = {
  setCategories: (categories: string[]) => void;
  setPostsQuantity: (quantity: number) => void;
  setCurrentPostsChunk: (posts: Post[]) => void;
};
/* Type for props that will be passed by the store. */
type AllInjectedProps = MapStateProps & MapDispatchProps;
/* All props type with children.
   Needed for static props check in the inner function. */
type AllProps = AllInjectedProps & { children?: React.ReactNode; };

/* State props connection. */
const mapStateToProps = (state: AppState): MapStateProps => ({
  categories: state.categories.categoriesList,
  postsQuantity: state.posts.postsQuantity,
  currentFilteredCategory: state.categories.currentFilteredCategory,
  currentPostsChunkNumber: state.posts.currentPostsChunkNumber,
  currentPostsChunk: state.posts.currentPostsChunk
});

/* State dispatch function connection. */
const mapDispatchToProps: MapDispatchProps = ({
  setCategories: createSetCategories,
  setPostsQuantity: createSetPostsQuantity,
  setCurrentPostsChunk: createSetCurrentPostChunk
});

const Preloader: React.FC<AllProps> = ({
  categories,
  setCategories,
  postsQuantity,
  setPostsQuantity,
  setCurrentPostsChunk,
  currentFilteredCategory,
  currentPostsChunkNumber,
  currentPostsChunk,
  children
}: AllProps) => {
  /* Stringified categories, needed for comparation. */
  const stringifiedCategories = JSON.stringify(categories);
  /* Loading categories. */
  useEffect(() => {
    API.getCategories().then((response) => {
      setCategories(retrieve(response.data as CategoriesDTO, [] as string[]));
    });
  }, [stringifiedCategories, setCategories]);

  /* Loading posts quantity. */
  useEffect(() => {
    API.getPostsQuantity().then((response) => {
      setPostsQuantity(retrieve(response.data as PostsQuantityDTO, 0));
    });
  }, [postsQuantity, setPostsQuantity]);

  /* Stringified current posts chunk, needed for comparation. */
  const stringifiedCurrentPostsChunk = JSON.stringify(currentPostsChunk);
  /* Loading current posts chunk. */
  useEffect(() => {
    API.getPostsChunk(
      currentFilteredCategory,
      currentPostsChunkNumber
    ).then((response) => {
      const retrievedPosts = retrieve<Post[]>(response.data as PostsDTO, []);
      setCurrentPostsChunk(retrievedPosts);
      setPostsQuantity(retrievedPosts.length);
    });
  }, [
    stringifiedCurrentPostsChunk,
    currentFilteredCategory,
    currentPostsChunkNumber,
    setCurrentPostsChunk
  ]);

  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preloader);
