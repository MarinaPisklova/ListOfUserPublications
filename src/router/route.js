import React from 'react';
import { Navigate } from 'react-router-dom';
import { ContentPage } from '../pages/ContentPage';
import { StartPage } from '../pages/StartPage';

export const privateRoutes = [
  { path: "*", component: <Navigate replace to="/posts" />, exact: true },
  { path: "/posts", component: <ContentPage />, exact: true },
]

export const publicRoutes = [
  { path: "*", component: <Navigate replace to="/login" />, exact: true },
  { path: "/login", component: <StartPage />, exact: true },
]
