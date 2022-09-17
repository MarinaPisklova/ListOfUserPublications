import React from "react";
import styled from "styled-components";

interface IImageProps {
  display?: string
  margin?: string;
  src: string;
  alt?: string;
}

const StyledImage = styled.img<IImageProps>`
  display: ${({ display }) => display || "block"};
  margin: ${({ margin }) => margin || "0"};
`

export function Image(props: IImageProps) {
  return (
    <StyledImage {...props} src={props.src} alt={props.alt}/>
  )
}