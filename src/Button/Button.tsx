import React from "react";
import styles from "./Button.module.css";

interface IPropsButton {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick?: () => void;
  autofocus?: boolean;
}

export function Button(props: IPropsButton) {
  return (
    <button autoFocus={props.autofocus} type={props.type} disabled={props.disabled} className={styles.button} onClick={props.handleClick}>
      {props.children}
    </button>
  )

}