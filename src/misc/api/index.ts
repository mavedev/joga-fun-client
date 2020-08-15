import axios, { AxiosResponse } from 'axios';

import { PostDTO as Post } from 'misc/dal';

export type APIResponse = Promise<AxiosResponse<any>>;

/** The main API to communicate with the server.  */
export default class API {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  public static getCategories = (): APIResponse => {
    return API.instance.get('categories');
  }

  public static login = (
    username: string,
    password: string
  ): APIResponse => {
    return API.instance.post('login', {}, { auth: { username, password } });
  }

  public static getPostsChunk = (
    filteredCategory: string | null,
    chunk: number
  ): APIResponse => {
    return API.instance.get(`posts/${filteredCategory || 'all'}/${chunk}`, {});
  }

  public static getPost = (postID: Maybe<string>) => {
    return API.instance.get(`post/${postID || ''}`, {});
  }

  public static getPostsQuantity = (): APIResponse => {
    return API.instance.get('posts/quantity', {});
  }

  public static createPost = (
    post: Omit<Post, 'id' | 'created'>,
    token: string
  ): APIResponse => {
    const config = { headers: { 'x-access-token': token } };
    return API.instance.post('posts/create', post, config);
  }

  public static createCategory = (name: string, token: string): APIResponse => {
    const config = { headers: { 'x-access-token': token } };
    return API.instance.post('categories/create', { name }, config);
  }
}
