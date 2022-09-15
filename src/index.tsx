import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { NotFoundPage } from './NotFoundPage';
import { StartPage } from './StartPage';
import store from './store/store';

window.addEventListener('load', () => {
    ReactDom.render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage/>} />
                    <Route path="/posts" element={<ContentPage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
})

