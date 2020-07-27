import axios, { AxiosResponse } from 'axios';

const categoriesURL = 'http://localhost:5000/api/v1.0/categories/50';

type APIResponse = Promise<AxiosResponse<any>>;

class API {
  private static adminAPI = axios.create({
    baseURL: 'http://localhost:5000/api/v1.0/'
  });

  public static getCategories = (): APIResponse => API.adminAPI.get(
    categoriesURL
  );
}

export default API;
