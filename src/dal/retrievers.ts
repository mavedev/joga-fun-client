import {
  CategoriesDTO,
  PostsQuantityDTO,
  PostsDTO,
  PostDTO,
  RootDTO,
  isCategoriesDTO,
  isPostsQuantityDTO,
  isPostsDTO
} from './types';

const retrieveCategories = (from: CategoriesDTO): string[] => (
  from.results.map((category) => category.name)
);

const retrievePostsQuantity = (from: PostsQuantityDTO): number => from.result;

const retrievePosts = (from: PostsDTO): PostDTO[] => from.results;

export const retrieve = (from: RootDTO, errorResult?: any): any => {
  if (isCategoriesDTO(from)) {
    return retrieveCategories(from);
  }
  if (isPostsQuantityDTO(from)) {
    return retrievePostsQuantity(from);
  }
  if (isPostsDTO(from)) {
    return retrievePosts(from);
  }
  return errorResult;
};
