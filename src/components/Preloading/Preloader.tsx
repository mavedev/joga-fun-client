import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  createSetCategories,
  createSetChunksLeft,
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
  currentFilteredCategory: string | null;
  currentPostsChunkNumber: number;
  currentPostsChunk: Post[];
};
/* Store dispatch props type. */
type MapDispatchProps = {
  setCategories: (categories: string[]) => void;
  setChunksLeft: (quantity: number) => void;
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
  currentFilteredCategory: state.categories.currentFilteredCategory,
  currentPostsChunkNumber: state.posts.currentPostsChunkNumber,
  currentPostsChunk: state.posts.currentPostsChunk
});

/* State dispatch function connection. */
const mapDispatchToProps: MapDispatchProps = ({
  setCategories: createSetCategories,
  setChunksLeft: createSetChunksLeft,
  setCurrentPostsChunk: createSetCurrentPostChunk
});

const Preloader: React.FC<AllProps> = ({
  categories,
  setCategories,
  setChunksLeft,
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

  /* Stringified current posts chunk, needed for comparation. */
  const stringifiedCurrentPostsChunk = JSON.stringify(currentPostsChunk);
  /* Loading current posts chunk. */
  useEffect(() => {
    API.getPostsChunk(
      currentFilteredCategory,
      currentPostsChunkNumber
    ).then((response) => {
      const defaultResult: PostsDTO = { chunksLeft: 0, posts: [] };
      const retrievedPostsInfo = retrieve<PostsDTO>(
        response.data as PostsDTO,
        defaultResult
      );
      setCurrentPostsChunk(retrievedPostsInfo.posts);
      setChunksLeft(retrievedPostsInfo.chunksLeft);
    });
  }, [
    stringifiedCurrentPostsChunk,
    currentFilteredCategory,
    currentPostsChunkNumber,
    setCurrentPostsChunk,
    setChunksLeft
  ]);

  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preloader);
