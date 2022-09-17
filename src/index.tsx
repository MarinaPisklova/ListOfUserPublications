import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ContentPage } from './ContentPage';
import { NotFoundPage } from './NotFoundPage';
import { StartPage } from './StartPage';
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

window.addEventListener('load', () => {
    ReactDom.render(
        <>
            <Global />
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StartPage />} />
                        <Route path="/posts" element={<ContentPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>,
        document.getElementById("root")
    );
})

