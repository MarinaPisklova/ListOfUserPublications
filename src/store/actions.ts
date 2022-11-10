import { ActionCreator } from "redux";
import { IPost } from './reducer';

export const SET_IS_AUTH = "SET_IS_AUTH";
export type SetIsAuthAction = {
  type: typeof SET_IS_AUTH;
  isAuth: boolean;
}
export const setIsAuth: ActionCreator<SetIsAuthAction> = (isAuth) => (
  { type: SET_IS_AUTH, isAuth }
)

export const POSTS_REQUEST = "POSTS_REQUEST";
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;

}
export const postsRequest: ActionCreator<PostsRequestAction> = () => (
  { type: POSTS_REQUEST }
)

export const POSTS_REQUEST_ERROR = "POSTS_REQUEST_ERROR";
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error) => (
  { type: POSTS_REQUEST_ERROR, error }
)

export const POSTS_REQUEST_SUCCESS = "POSTS_REQUEST_SUCCESS";
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  posts: IPost[];
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (posts) => (
  { type: POSTS_REQUEST_SUCCESS, posts }
)