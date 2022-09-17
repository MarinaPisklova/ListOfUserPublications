import React from "react";
import styled from "styled-components";

interface ILabelProps {
  for: string;
  children: React.ReactNode;
}

const StyledLabel = styled.label`
  margin-right: auto;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 600px){
    margin: 0 0 13px 0;
  }
  @media (max-width: 400px){
    margin: 0 0 18px 0;
  }
`

export function Label(props: ILabelProps) {
  return (
    <StyledLabel htmlFor={props.for}>{props.children}</StyledLabel>
  )
}