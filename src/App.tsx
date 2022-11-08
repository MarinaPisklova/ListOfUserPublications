import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './components/AppRouter/AppRouter';
import store from './store/store';

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
    }
    button{
        border: 0;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
`

export function App() {
  return (
    <>
      <Global />
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </>
  )
}