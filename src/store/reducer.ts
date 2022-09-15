import { Reducer, ThunkAction } from '@reduxjs/toolkit';
import axios from "axios";
import { AnyAction } from 'redux';
import { postsRequest, postsRequestError, postsRequestSuccess, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from './actions';

export interface IPost {
  userId: number,
  name: string,
  company: string,
  title: string,
  body: string,
  img: string,
}

export type RootState = {
  login: string;
  password: string;
  posts: IPost[];
  loading: boolean;
  error: string;
}

export const initialState: RootState = {
  login: "user",
  password: "12345",
  posts: [],
  loading: false,
  error: "",
}

type MyAction = AnyAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case POSTS_REQUEST_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
        loading: false,
      }
    }
    case POSTS_REQUEST_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state;
  }
}

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  dispatch(postsRequest());
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      const usersData = resp.data;
      let posts: IPost[] = [];

      usersData.map((user: {
        company: any; id: any; name: any;
      }) => {
        let post = {
          userId: user.id,
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
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${post.userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${post.userId}`)
          ])
            .then(axios.spread(function (postsInfo, photosInfo) {
              const postInfo = postsInfo.data[0];
              const photoInfo = photosInfo.data[0];

              post.title = postInfo.title;
              post.body = postInfo.body;
              post.img = photoInfo.thumbnailUrl;
            }))
        )
      });
      promises.push(posts);

      return axios.all(promises);
    })
    .then((arr)=>{
      dispatch(postsRequestSuccess(arr[arr.length-1]));
    })
    .catch ((error) => {
  console.log(error);
  dispatch(postsRequestError(String(error)));
})
}