import React from "react";
import styled from "styled-components";

interface IFlexProps {
  direction?: string;
  wrap?: string;
  align?: string;
  justify?: string;
  margin?: string;
  gap?: string;
  children: React.ReactNode;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || "0"};
`

export function Flex(props: IFlexProps) {
  return (
    <StyledFlex {...props} />
  )
}