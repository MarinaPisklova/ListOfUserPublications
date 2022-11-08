import React from "react";
import styled from "styled-components";

interface IFormTitleProps{
  title: string;
}

const StyledTitle = styled.h3`
  margin-bottom: 45px;
  font-size: 24px;
  font-weight: 800;
  color: #27569C;

  @media (max-width: 400px){
    margin-bottom: 12px;
  }
`

export function FormTitle(props: IFormTitleProps) {
  return(
    <StyledTitle>{props.title}</StyledTitle>
  )
}