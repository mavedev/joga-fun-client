import {
  CategoriesDTO,
  PostsQuantityDTO,
  RootDTO,
  isCategoriesDTO,
  isPostsQuantityDTO
} from './types';

const retrieveCategories = (from: CategoriesDTO): string[] => (
  from.results.map((category) => category.name)
);

const retrievePostsQuantity = (from: PostsQuantityDTO): number => from.result;

export const retrieve = (from: RootDTO, errorResult?: any): any => {
  if (isCategoriesDTO(from)) {
    return retrieveCategories(from);
  }
  if (isPostsQuantityDTO(from)) {
    return retrievePostsQuantity(from);
  }
  return errorResult;
};
