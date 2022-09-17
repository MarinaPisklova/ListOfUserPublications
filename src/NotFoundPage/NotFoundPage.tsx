import React from "react";
import styled from "styled-components";

const Wrapper404Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export function NotFoundPage() {
  return (
    <Wrapper404Page>
      <h1>404 Error</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>I think you just went to a page non - existing page.</p>
    </Wrapper404Page>
  )
}