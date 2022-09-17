import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../shared/Text';
import { IPost } from './../../store/reducer';
import { Flex } from './../../shared/Flex/Flex';
import { Image } from './../../shared/Image/Image';

interface IPostProps {
  post: IPost;
}

const PostWrapper = styled.div`
  padding: 20px 16px 26px;
  margin-bottom: 7px;

  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  list-style-type: none;

  @media (max-width: 744px){
    padding: 20px 19px 26px;
    margin-bottom: 12px;
  }
  @media (max-width: 400px){
    width: 100%;
    padding: 13px 12px 25px;
  }
`
const HeaderPostWrapper = styled(Flex)`
  @media (max-width: 744px){
    flex-direction: column;
    margin: 0 0 16px 0;
  }
  @media (max-width: 400px){
    margin: 0 0 23px 0;
  }
`
const PostImage = styled(Image)`
  width: 150px;
  height: 150px;


  @media (max-width: 744px){
    margin-bottom: 25px;
  }

  @media (max-width: 400px){
    display: none;
  }
`
const PostBody = styled(Text)`
  @media (max-width: 400px){
    display: none;
  }
`

const PostAuthor = styled(Text)`
  @media (max-width: 744px){
    margin-bottom: 19px;
  }
  @media (max-width: 400px){
    margin-bottom: 27px;
  }
`

const PostTitle = styled(Text)`
  @media (max-width: 744px){
    margin-bottom: 7px;
  }
`


export function Post(props: IPostProps) {
  return (
    <PostWrapper>
      <HeaderPostWrapper margin='0 0 22px 0' align='flex-start' justify='flex-start'>
        <PostImage margin='0 30px 0 0' src={props.post.img} />
        <Flex direction='column' align='flex-start'>
          <PostAuthor margin='0 0 24px 0'>Author: {props.post.name}</PostAuthor>
          <Text>Company: {props.post.company}</Text>
        </Flex>
      </HeaderPostWrapper>
      <PostTitle margin='0 0 46px 0'>Title:{props.post.title}</PostTitle>
      <PostBody>{props.post.body}</PostBody>
    </PostWrapper>
  )

}