import React from "react";
import styles from "./Error.module.css";

interface IErrorProps{
  message: string;
}

export function Error(props: IErrorProps) {
  return (
    <div className={styles.error}>Error: {props.message}</div>
  )
}