import axios, { AxiosResponse } from 'axios';

type APIResponse = Promise<AxiosResponse<any>>;

class API {
  private static adminAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  public static getCategories = (): APIResponse => API.adminAPI.get(
    'categories/50'
  );

  public static login = (
    username: string,
    password: string
  ): APIResponse => API.adminAPI
    .post('login', {}, { auth: { username, password } })
}

export default API;
