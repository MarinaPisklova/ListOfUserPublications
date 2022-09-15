import { ActionCreator } from "redux";

export const POSTS_REQUEST = "POSTS_REQUEST";
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
}
export const postsRequest: ActionCreator<PostsRequestAction> = () => (
  { type: POSTS_REQUEST}
)

export const POSTS_REQUEST_ERROR = "POSTS_REQUEST_ERROR";
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error) => (
  { type: POSTS_REQUEST_ERROR, error}
)

export const POSTS_REQUEST_SUCCESS = "POSTS_REQUEST_SUCCESS";
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  posts: string;
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (posts) => (
  { type: POSTS_REQUEST_SUCCESS, posts}
)