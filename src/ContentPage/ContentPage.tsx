import * as React from 'react';
import { Header } from '../Header';
import { LoginFormContainer } from '../LoginFormContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Button } from '../Button';
import { Link, Navigate } from 'react-router-dom';
import { Posts } from '../Posts';

export function ContentPage() {
  const login = useSelector<RootState, string>(state => state.login);
  return (
    <>
      <Header>
        <div>{login}</div>
        <Link to="/">GoToStart</Link>
      </Header>
      <Posts/>
    </>
  )
}