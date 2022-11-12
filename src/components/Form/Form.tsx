import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../shared/Flex";
import { Error } from '../UI/Error';
import { FormTitle } from "./FormTitle/FormTitle";
import { Button } from "../UI/Button";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/reducer";
import { Input } from "../UI/Input";

interface IProps {
  title: string;
  login: string;
  password: string;
  isValidLogin: boolean;
  isValidPassword: boolean;
  handleSubmit: (event: FormEvent) => void;
  handleChangeLogin: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  messageError: string;
  isSuccessLogIn: boolean;
  btnName: string;
  redirect: string;
  idDisabled: boolean;
}

const WrapperForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px 16px 23px 15px;
  transform: translate(-50%, -50%);
  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media (max-width: 500px){
    position: static;
    top: 0;
    left: 0;
    transform: none;
    margin: 14px 15px 0 15px;
  }

  @media (max-width: 400px){
    padding: 12px 16px 27px 9px;
  }
`

export function Form(props: IProps) {
  const ref = useRef<HTMLInputElement>(null);
  const isAuth = useSelector<RootState, boolean>(state => state.isAuth);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <WrapperForm>
      <Flex direction="column">
        <FormTitle title={props.title} />
        <form onSubmit={props.handleSubmit}>
          <Input
            label="login"
            id="login"
            type="text"
            value={props.login}
            onChange={props.handleChangeLogin}
            isValid={props.isValidLogin}
            ref={ref}
          />
          <Input
            label="password"
            id="password"
            type="password"
            value={props.password}
            onChange={props.handleChangePassword}
            isValid={props.isValidPassword}
            ref={ref}
          />
          {props.messageError && (<Error message={props.messageError} />)}
          {props.isSuccessLogIn && (<Navigate to={props.redirect} />)}
          <Button disabled={props.idDisabled} type='submit'>
            {props.idDisabled ? "Загрузка..." : props.btnName}
          </Button>
        </form>
      </Flex>
    </WrapperForm>
  );
}