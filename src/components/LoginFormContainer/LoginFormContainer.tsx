import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form } from '../Form';
import { RootState } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from '../../store/actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function LoginFormContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const [inputLogin, setInputLogin] = useState("");
  const [isValidLogin, setIsValidLogin] = useState(true);
  const [inputPassword, setInputPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [messageError, setMessageError] = useState('');
  const [isSuccessLogIn, setIsSuccessLogIn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const login = useSelector<RootState, string>(state => state.login);
  const password = useSelector<RootState, string>(state => state.password);

  function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
    setIsValidLogin(true);
    setInputLogin(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setIsValidPassword(true);
    setInputPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    setIsDisabled(true);
    event.preventDefault();
    setMessageError(validateInputs());
    const isFormValid = !validateInputs();
    if (!isFormValid){
      setIsDisabled(false);
      return;
    }
    setIsSuccessLogIn(true);
    dispatch(setIsAuth(true));
    localStorage.setItem('auth', 'true');
    setIsDisabled(false);
  }

  function validateInputs() {
    let errorMessage = "";

    if (inputLogin != login) {
      setIsValidLogin(false);
      errorMessage += 'Неверный логин \n';
    }

    if (inputPassword != password) {
      setIsValidPassword(() => false);
      errorMessage += 'Неверный пароль';
    }
    return errorMessage;
  }

  return (
    <>
      <Form
        title={"Autorization"}
        login={inputLogin}
        password={inputPassword}
        isValidLogin={isValidLogin}
        isValidPassword={isValidPassword}
        handleSubmit={handleSubmit}
        handleChangeLogin={handleChangeLogin}
        handleChangePassword={handleChangePassword}
        messageError={messageError}
        isSuccessLogIn={isSuccessLogIn}
        btnName={"Submit"}
        redirect={"/posts"}
        idDisabled={isDisabled}
      />
    </>
  )
}
