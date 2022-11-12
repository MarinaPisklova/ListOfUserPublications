import { Reducer, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import axios from "axios";
import { AnyAction } from 'redux';
import { postsRequest, postsRequestError, postsRequestSuccess, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS, SET_IS_AUTH } from './actions';
import PostSevice from './../API/PostService';

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export interface IPost {
  userId: number;
  name: string;
  company: string;
  postId: number;
  title: string;
  body: string;
  img: string;
}

export interface IPostsData {
  posts: IPost[];
  loading: boolean;
  error: string;
}

export type RootState = {
  isAuth: boolean;
  login: string;
  password: string;
  postsData: IPostsData;
}

export const initialState: RootState = {
  isAuth: false,
  login: "user",
  password: "12345",
  postsData: {
    posts: [],
    loading: false,
    error: "",
  },
}

type MyAction = AnyAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
      }
    }
    case POSTS_REQUEST: {
      return {
        ...state,
        postsData: {
          posts: [...state.postsData.posts],
          loading: true,
          error: ""
        }
      }
    }
    case POSTS_REQUEST_SUCCESS: {
      return {
        ...state,
        postsData: {
          posts: [...state.postsData.posts, ...action.posts],
          loading: false,
          error: ""
        }
      }
    }
    case POSTS_REQUEST_ERROR: {
      return {
        ...state,
        postsData: {
          posts: [...state.postsData.posts],
          loading: false,
          error: action.error
        }
      }
    }
    default:
      return state;
  }
}

export const postsRequestAsync = (page = 1): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  dispatch(postsRequest());

  PostSevice.getUsers()
    .then((resp) => {
      const usersData = resp.data;
      let posts: IPost[] = [];
  
      usersData.map((user: {
        company: any; id: any; name: any;
      }) => {
        let post = {
          userId: user.id,
          postId: -1,
          name: user.name,
          company: user.company.name,
          title: "",
          body: "",
          img: "",
        }
        posts.push(post);
      })
      return posts;
    })
    .then((posts) => {
      let promises: any[] = [];
      posts.map((post) => {
        promises.push(
          axios.all([
            PostSevice.getPostByUserId(post.userId),
            PostSevice.getPhotosByUserId(post.userId)
          ])
            .then(axios.spread(function (postsInfo, photosInfo) {
              const postInfo = postsInfo.data[page - 1];
              const photoInfo = photosInfo.data[page - 1];

              post.postId = postInfo.id;
              post.title = postInfo.title;
              post.body = postInfo.body;
              post.img = photoInfo.thumbnailUrl;
            }))
        )
      });
      promises.push(posts);
      return axios.all(promises);
    })
    .then((arr) => {
      dispatch(postsRequestSuccess(arr[arr.length - 1]));
    })
    .catch((error) => {
      console.log(error);
      dispatch(postsRequestError(String(error)));
    })
}
