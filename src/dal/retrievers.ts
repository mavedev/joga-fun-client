import {
  CategoriesDTO,
  RootDTO,
  isCategoriesDTO
} from './types';

const retrieveCategories = (from: CategoriesDTO): string[] => (
  from.results.map((category) => category.name)
);

export const retrieve = (from: RootDTO, errorResult?: any): any => {
  if (isCategoriesDTO(from)) {
    return retrieveCategories(from);
  }
  return errorResult;
};
