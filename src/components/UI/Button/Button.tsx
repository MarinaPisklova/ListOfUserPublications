import React from "react";
import styled from 'styled-components';

interface IPropsButton {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick?: () => void;
  autofocus?: boolean;
  className?: string;
}

export const StyledButton = styled.button`
  display: block;
  margin: auto;
  height: 43px;
  width: 213px;
  font-size: 24px;
  line-height: 29px;
  background: #E4B062;
  border-radius: 10px;

  &:hover,
  &:focus{
    background: #f09c15;
  }

  @media (max-width: 400px){
    margin-top: 19px;
  }
`

export function Button(props: IPropsButton) {
  return (
    <StyledButton autoFocus={props.autofocus} type={props.type} disabled={props.disabled} onClick={props.handleClick}>
      {props.children}
    </StyledButton>
  )
}