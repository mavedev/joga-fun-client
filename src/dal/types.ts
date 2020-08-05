export type CategoryDTO = {
  name: string;
}

export type CategoriesDTO = {
  results: CategoryDTO[]
}

export type PostsQuantityDTO = {
  result: number;
}

export type PostDTO = {
  title: string;
  imageURL: string;
  body: string;
  created: string;
  category: string;
};

export type PostsDTO = {
  results: PostDTO[];
};

export const isCategoryDTO = (obj: any): obj is CategoryDTO => (
  !!obj.name
  && typeof obj.name === 'string'
);

export const isCategoriesDTO = (obj: any): obj is CategoriesDTO => (
  !!obj.results
  && obj.results.every((element: any) => isCategoryDTO(element))
);

export const isPostsQuantityDTO = (obj: any): obj is PostsQuantityDTO => (
  !!obj.result
  && typeof obj.result === 'number'
);

export const isPostDTO = (obj: any): obj is PostDTO => (
  !!obj.title && typeof obj.title === 'string'
  && !!obj.imageURL && typeof obj.imageURL === 'string'
  && !!obj.body && typeof obj.body === 'string'
  && !!obj.created && typeof obj.created === 'string'
  && !!obj.category && typeof obj.category === 'string'
);

export const isPostsDTO = (obj: any): obj is PostsDTO => (
  !!obj.results
  && obj.results.every((element: any) => isPostDTO(element))
);

export type RootDTO = CategoriesDTO
  | PostsQuantityDTO
  | PostsDTO;
