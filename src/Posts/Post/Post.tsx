import * as React from 'react';
import { IPost } from './../../store/reducer';


interface IPostProps{
  post: IPost;
}

export function Post(props:IPostProps) {
  return(
    <div>
      <div>{props.post.name}</div>
      <div>{props.post.company}</div>
      <div>{props.post.title}</div>
      <div>{props.post.body}</div>
      <div>{props.post.img}</div>
    </div>
  )

}