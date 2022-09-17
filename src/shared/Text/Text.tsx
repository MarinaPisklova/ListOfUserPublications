import React from "react";
import styled from "styled-components";

interface ITextProps {
  size?: string;
  margin?: string;
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled.p<ITextProps>`
  font-size: ${props => props.size || "16px"};
  margin: ${props => props.margin || "0"};;
`

export function Text(props: ITextProps) {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}