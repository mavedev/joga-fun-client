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
  obj === Object(obj)
  && 'name' in obj && typeof obj.name === 'string'
);

/** Check CategoriesDTO type. */
export const isCategoriesDTO = (obj: any): obj is CategoriesDTO => (
  obj === Object(obj)
  && 'results' in obj && obj.results === Object(obj.results)
  && obj.results.every((element: any) => isCategoryDTO(element))
);

/** Check PostDTO type. */
export const isPostDTO = (obj: any): obj is PostDTO => (
  obj === Object(obj)
  && 'title' in obj && typeof obj.title === 'string'
  && 'imageURL' in obj && typeof obj.imageURL === 'string'
  && 'body' in obj && typeof obj.body === 'string'
  && 'created' in obj && typeof obj.created === 'string'
  && 'category' in obj && typeof obj.category === 'string'
);

/** Check PostsDTO type. */
export const isPostsDTO = (obj: any): obj is PostsDTO => (
  obj === Object(obj)
  && 'chunksLeft' in obj && typeof obj.chunksLeft === 'number'
  && 'posts' in obj && obj.posts === Object(obj.posts)
  && obj.posts.every((element: any) => isPostDTO(element))
);

/** All possible DTOs. */
export type RootDTO = CategoriesDTO | PostsDTO;
