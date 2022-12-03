import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Flex } from '../../shared/Flex';
import { postsRequestAsync, RootState } from '../../store/reducer';
import { IPost } from '../../store/reducer';
import { useEffect, useRef, useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Loader } from '../UI/Loader';
import { Error } from '../UI/Error';
import { Post } from './Post/Post';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { useWindowResize } from '../../hooks/useWindowResize';

const Li = styled.li`
  list-style-type: none;

  @media (max-width: 750px){
    flex: 1 1 40%;
  }

  @media (max-width: 400px){
    flex: 0 0 100%;
  }
`
const Content = styled.div`
  height: 87vh;
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

const ListNoScrollbar = styled(List)`
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  .no-scrollbars::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector<RootState, IPost[]>(state => state.postsData.posts);
  const error = useSelector<RootState, string>(state => state.postsData.error);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [itemSizes, setItemSizes] = useState(350);

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  const PostElement = ({ index, data, style }: any) => (
    <Li key={"postId" + data[index].postId + "userId" + data[index].userId} style={style}>
      <Post post={data[index]} />
    </Li>
  );

  const isItemLoaded = (index: number) => index < posts.length && posts[index] !== null;
  const loadMoreItems = (startIndex: any, stopIndex: number) => {
    return new Promise<void>(resolve => {
      setPage(() => page + 1);
      resolve();
    });
  };

  const [windowWidth] = useWindowResize();
  
  useEffect(() => {
   console.log(windowWidth);

   if(windowWidth >= 900)
   {
    setItemSizes(350);
   }
   if(windowWidth < 900 && windowWidth >= 460)
   {
    setItemSizes(420);
   }
   else if(windowWidth < 460 && windowWidth >= 400)
   {
    setItemSizes(480);
   }
   else if(windowWidth < 400)
   {
    setItemSizes(260);
   }
  }, [windowWidth]);


  return (
    <Content>
      {!error ? (
        posts.length
          ?
          <AutoSizer>
             {({ height, width }) => (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={1000}
                loadMoreItems={loadMoreItems}
                threshold={5}
              >
                {({ onItemsRendered, ref }) => (
                  <ListNoScrollbar
                    className="List"
                    height={height - 20}
                    width={width}
                    itemCount={posts.length}
                    itemSize={itemSizes}
                    itemData={posts}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                  >
                    {PostElement}
                  </ListNoScrollbar>
                )}
              </InfiniteLoader>
            )}
          </AutoSizer>
          :
          <XLoader><Loader /></XLoader>
      ) : (
        <Error message={error} />
      )}
    </Content>
  )
}