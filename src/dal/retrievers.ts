import {
  CategoriesDTO,
  PostsDTO,
  PostDTO,
  RootDTO,
  isCategoriesDTO,
  isPostsDTO
} from './types';

/** Get categories names from the DTO. */
const retrieveCategories = (from: CategoriesDTO): string[] => (
  from.results.map((category) => category.name)
);

/** Get posts from the DTO. */
const retrievePosts = (from: PostsDTO): PostDTO[] => from.results;

type RetrievedCategoriesType = ReturnType<typeof retrieveCategories>;
type RetrievedPostsType = ReturnType<typeof retrievePosts>;
type RetrievedType = RetrievedCategoriesType | RetrievedPostsType | undefined;

/** The return type of the retrieve function. */
type RetrieverType<T> = T extends RetrievedType ? T : never;

/**
  * Retrieve an object from recieved data.
  * Returned result must be of known type.
  * @template T result type.
  * @param from from what to retrieve. Only allow known DTO's.
  * @param errorResult what to return by default
  */
export const retrieve = <T>(
  from: RootDTO,
  errorResult?: RetrieverType<T>
): RetrieverType<T> => {
  if (isCategoriesDTO(from)) {
    return retrieveCategories(from) as RetrieverType<T>;
  }
  if (isPostsDTO(from)) {
    return retrievePosts(from) as RetrieverType<T>;
  }
  return errorResult as RetrieverType<T>;
};
