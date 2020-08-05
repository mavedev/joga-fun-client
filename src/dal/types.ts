export type CategoryDTO = {
  name: string;
}

export type CategoriesDTO = {
  results: CategoryDTO[]
}

export const isCategoryDTO = (obj: any): obj is CategoryDTO => !!obj.name;
export const isCategoriesDTO = (obj: any): obj is CategoriesDTO => (
  !!obj.results
  && obj.results.every((element: any) => isCategoryDTO(element))
);

export type PostDTO = {
  title: string;
  imageURL: string;
  body: string;
  created: string;
  category: string;
};

export type RootDTO = CategoriesDTO;
