/** Category info that is to be recieved from the server. */
export type CategoryDTO = {
  name: string;
}

/** Categories info that is to be recieved from the server. */
export type CategoriesDTO = {
  results: CategoryDTO[]
}

/** Post info that is to be recieved from the server. */
export type PostDTO = {
  title: string;
  imageURL: string;
  body: string;
  created: string;
  category: string;
};

/** Posts info that is to be recieved from the server. */
export type PostsDTO = {
  chunksLeft: number;
  posts: PostDTO[];
};

/** Check CategoryDTO type. */
export const isCategoryDTO = (obj: any): obj is CategoryDTO => (
  !!obj.name
  && typeof obj.name === 'string'
);

/** Check CategoriesDTO type. */
export const isCategoriesDTO = (obj: any): obj is CategoriesDTO => (
  !!obj.results
  && obj.results.every((element: any) => isCategoryDTO(element))
);

/** Check PostDTO type. */
export const isPostDTO = (obj: any): obj is PostDTO => (
  !!obj.title && typeof obj.title === 'string'
  && !!obj.imageURL && typeof obj.imageURL === 'string'
  && !!obj.body && typeof obj.body === 'string'
  && !!obj.created && typeof obj.created === 'string'
  && !!obj.category && typeof obj.category === 'string'
);

/** Check PostsDTO type. */
export const isPostsDTO = (obj: any): obj is PostsDTO => (
  !!obj.chunksLeft && typeof obj.chunksLeft === 'number'
  && !!obj.posts && typeof obj.posts === 'object'
  && obj.posts.every((element: any) => isPostDTO(element))
);

/** All possible DTOs. */
export type RootDTO = CategoriesDTO | PostsDTO;
