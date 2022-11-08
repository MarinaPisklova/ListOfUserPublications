import * as React from 'react';
import { Header } from '../../components/Header';
import { LoginFormContainer } from '../../components/LoginFormContainer';

export function StartPage() {
  return (
    <>
      <Header />
      <LoginFormContainer />
    </>
  )
}