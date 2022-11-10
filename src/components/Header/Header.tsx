import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../shared/Flex';
import { Logo } from '../Logo';



const StyledHeader = styled.header`
    height: 7vh;
    padding: 27px 36px 28px 41px;
    background: #E4B062;

    @media (max-width: 744px){
        padding-left: 37px;
    }

    @media (max-width: 400px){
        padding-left: 15px;
        padding-right: 15px;
    }
`
const WrapperLogoLink = styled.div`
    margin-right: auto;
`

export function Header(props: { children?: React.ReactNode }) {
    return (
        <StyledHeader>
            <Flex>
                <WrapperLogoLink>
                    <Link to="#">
                        <Logo/>
                    </Link>
                </WrapperLogoLink>
                {props.children}
            </Flex>
        </StyledHeader>
    )
}