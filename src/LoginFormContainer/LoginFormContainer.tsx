import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { Form } from '../Form';
import { Error } from '../Error';
import { postsRequestAsync, RootState } from '../store/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function LoginFormContainer() {
  const [login, setLogin] = useState("");
  const [isValidLogin, setIsValidLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [messageError, setMessageError] = useState('');
  const [isSuccessLogIn, setIsSuccessLogIn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const error = useSelector<RootState, string>(state => state.error);
  const loading = useSelector<RootState, boolean>(state => state.loading);


  function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
    setIsValidLogin(true);
    setLogin(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setIsValidPassword(true);
    setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    setIsDisabled(true);
    event.preventDefault();
    // setMessageError(validateInputs());
    // const isFormValid = !validateInputs();
    // if (!isFormValid){
    //   setIsDisabled(false);
    //   return;
    // }
    dispatch(postsRequestAsync());
    setIsDisabled(false);
  }

  function validateInputs() {
    let errorMessage = "";

    if (login.length <= 2) {
      setIsValidLogin(false);
      errorMessage += 'Логин должен быть больше 5 символов \n';
    }

    if (password.length <= 2) {
      setIsValidPassword(() => false);
      errorMessage += 'Пароль должен быть больше 5 символов';
    }
    return errorMessage;
  }

  return (
    <>
      <Form
        title={"Autorization"}
        login={login}
        password={password}
        isValidLogin={isValidLogin}
        isValidPassword={isValidPassword}
        handleSubmit={handleSubmit}
        handleChangeLogin={handleChangeLogin}
        handleChangePassword={handleChangePassword}
        messageError={messageError}
        isSuccessLogIn={loading}
        btnName={"Submit"}
        redirect={"/posts"}
        idDisabled={isDisabled}
      />
      {error && <Error message={error} />}
    </>
  )
}