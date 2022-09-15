import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../Button";
import styles from "./Form.module.css";

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

export function Form(props: IProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className={styles.formBox}>
      <h3 className={styles.title}>{props.title}</h3>
      <form className={styles.form} onSubmit={props.handleSubmit}>
        <div className={styles.box}>
          <input
            type="text"
            className={styles.input}
            autoComplete="on"
            placeholder="Имя"
            value={props.login}
            onChange={props.handleChangeLogin}
            aria-invalid={!props.isValidLogin ? true : undefined}
            ref={ref}
          />
          <input
            type="password"
            className={styles.input}
            autoComplete="on"
            placeholder="Пароль"
            value={props.password}
            onChange={props.handleChangePassword}
            aria-invalid={!props.isValidPassword ? true : undefined}
          />
        </div>
        {props.messageError && (<p className={styles.error}>{props.messageError}</p>)}
        {props.isSuccessLogIn && (<Navigate to={props.redirect} />)}
        <Button disabled={props.idDisabled} type='submit'>
          {props.idDisabled ? "Загрузка..." : props.btnName}
        </Button>
      </form>
    </div>
  );
}