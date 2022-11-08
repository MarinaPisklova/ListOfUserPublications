import React from "react";
import styled from "styled-components";


interface ILogoProps {
  display?: string
  margin?: string;
  logo_desktop?: string;
  logo_mobile?: string;
}

const StyledLogo = styled.img<ILogoProps>`
  content: url(${({logo_desktop}) => logo_desktop || "Logo"});
  display: ${({ display }) => display || "block"};
  margin: ${({ margin }) => margin || "0"};

  @media (max-width: 500px){
    content: url(${({logo_mobile}) => logo_mobile || "MobileLogo"});
  }
`

export function Logo(props:ILogoProps){
  const logoSrc = require("./../../../public/images/logo.png").default;
  const logoMobileSrc = require("./../../../public/images/logo_mobile.png").default;

  return (
    <StyledLogo {...props} logo_desktop={logoSrc} logo_mobile={logoMobileSrc} alt="logo"/>
  )
}
