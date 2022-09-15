import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { IPost } from './../store/reducer';
import { Post } from './Post/Post';

export function Posts() {
  const posts = useSelector<RootState, IPost[]>(state => state.posts);

  let postsElements = posts.map((post) => 
    <li key={post.userId} >
      <Post post={post} />
    </li>
)

  return (
    <ul>
      {postsElements}
    </ul>
  )
}