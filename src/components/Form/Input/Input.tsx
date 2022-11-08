import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Flex } from "../../../shared/Flex";
import { Label } from "../Label";

interface IInputProps {
  id:string;
  label: string;
  type: "text" | "password";
  isValid: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  ref: React.RefObject<HTMLInputElement>;
}

const StyledInput = styled.input`
  width: 295px;
  height: 45px;
  padding: 0 5px;
  margin-left: 20px;
  background: #D9D9D9;
  border: 4px solid #27569C;
  border-radius: 10px;

  @media (max-width: 600px){
    margin: 0;
  }

  @media (max-width: 450px){
    width: 212px;
    height: 39px;
  }
`

const InputFlex = styled(Flex)`
  @media (max-width: 600px){
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 400px){
    margin: 0 0 9px 0;
  }
`

export function Input(props: IInputProps) {
  return (
    <InputFlex margin="0 0 25px 0" align="flex-end">
      <Label for={props.id}>{props.label}</Label>
      <StyledInput
        id={props.id}
        type={props.type}
        autoComplete="on"
        value={props.value}
        onChange={props.onChange}
        aria-invalid={!props.isValid ? true : undefined}
        ref={props.ref}
      />
    </InputFlex>
  )
}