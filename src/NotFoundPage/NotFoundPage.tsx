import React from "react";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div className={styles.box}>
      <h1>404 Error</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>I think you just went to a page non - existing page.</p>
    </div>
  )
}