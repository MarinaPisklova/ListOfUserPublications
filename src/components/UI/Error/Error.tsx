import React from "react";
import styled from "styled-components";

interface IErrorProps{
  message: string;
}

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: red;
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
`

export function Error(props: IErrorProps) {
  return (
    <StyledError>{props.message}</StyledError>
  )
}