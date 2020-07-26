import axios, { AxiosResponse } from 'axios';

const categoriesURL = 'http://localhost:5000/api/v1.0/categories/50';

type APIResponse = Promise<AxiosResponse<any>>;

class API {
  public static getCategories = (): APIResponse => axios.get(categoriesURL);
}
