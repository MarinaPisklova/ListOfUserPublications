import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Flex } from '../shared/Flex';
import { postsRequestAsync, RootState } from '../store/reducer';
import { IPost } from './../store/reducer';
import { Post } from './Post/Post';
import { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Loader } from '../Loader';
import { Error } from './../Error';

const Li = styled.li`
  list-style-type: none;
  flex: 1 1 40%;
  display: flex;

  @media (max-width: 750px){
    flex: 1 1 40%;
  }

  @media (max-width: 400px){
    flex: 0 0 100%;
  }
`
const Content = styled.div`
  max-width: 987px;
  margin: 0 auto;
  padding: 20px 20px;

  @media (max-width: 744px){
    padding: 25px 37px;
  }

  @media (max-width: 600px){
    padding: 10px 15px 10px 13px;
  }
`

const ContentFlex = styled(Flex)`
  @media (max-width: 744px){
    gap: 20px;
  }

  @media (max-width: 400px){
    gap: 0px;
  }
`

const XLoader = styled.div`
  margin-top: 200px;

`

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector<RootState, IPost[]>(state => state.posts);
  const error = useSelector<RootState, string>(state => state.error);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, []);


  let postsElements = posts.map((post) =>
    <Li key={post.userId} >
      <Post post={post} />
    </Li>
  )

  return (
    <Content>
      <ContentFlex wrap='wrap' align='stretch' gap={"13px"}>
        {!error ? (
          posts.length ? postsElements : <XLoader><Loader /></XLoader>
        ) : (
          <Error message={error} />
        )}
      </ContentFlex>
    </Content>
  )
}