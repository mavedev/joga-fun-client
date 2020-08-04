import axios, { AxiosResponse } from 'axios';

type APIResponse = Promise<AxiosResponse<any>>;

class API {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  public static getCategories = (): APIResponse => API.instance.get(
    'categories/50'
  );

  public static login = (
    username: string,
    password: string
  ): APIResponse => API.instance
    .post('login', {}, { auth: { username, password } })

  public static getPostsQuantity = (): APIResponse => API.instance.get(
    'posts/quantity', {}
  )
}

export default API;
