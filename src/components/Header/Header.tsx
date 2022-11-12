import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../shared/Flex';
import { setIsAuth } from '../../store/actions';
import { AppDispatch, RootState } from '../../store/reducer';
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

const StyledUserName = styled.span`
    margin-right: 27px;
    font-size: 24px;
    line-height: 29px;
    text-transform: capitalize;

    @media (max-width: 744px){
      visibility: hidden;
    }
`
const StyledSvg = styled.svg`
  margin-top: 4px;
    path{
        fill:#27569C;
    }
    &:hover,
    &:focus {
        path{
            fill: #5588d6;
        }
    }
`
const StyledButtonExit = styled.button`
  border: 0;
  background-color: transparent;
`

export function Header(props: { children?: React.ReactNode }) {
    const login = useSelector<RootState, string>(state => state.login);
    const isAuth = useSelector<RootState, boolean>(state => state.isAuth);
    const dispatch = useDispatch<AppDispatch>();

    function handleClick(event: React.FormEvent) {
        dispatch(setIsAuth(false));
        localStorage.removeItem('auth');
    }

    return (
        <StyledHeader>
            <Flex>
                <WrapperLogoLink>
                    <Link to="#">
                        <Logo />
                    </Link>
                </WrapperLogoLink>
                {
                    isAuth && (
                        <>
                            <StyledUserName>{login}</StyledUserName>
                            <StyledButtonExit onClick={handleClick}>
                                <StyledSvg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M61.4036 26.6281L47.3488 15.0341C47.1078 14.8354 46.8841 14.7301 46.6242 14.7301C46.0603 14.7301 45.5306 15.2345 45.5306 16.1985V23.0899H27.5291C26.6828 23.0899 25.92 23.9266 25.92 24.923V30.8963C25.92 31.8928 26.683 32.7274 27.5291 32.7274H45.5306V39.6225C45.5306 40.5864 46.0606 41.1602 46.6246 41.1602C46.6247 41.1602 46.6043 41.1602 46.6043 41.1602C46.8642 41.1602 47.1189 41.0205 47.3597 40.8215L61.4084 29.2111C61.7858 28.8999 61.9996 28.4237 61.9998 27.9197C62 27.4159 61.7812 26.9395 61.4036 26.6281Z" fill="black" />
                                    <path d="M50.8073 43.9712C50.5713 43.9712 50.3506 44.1864 50.3472 44.1904L46.9358 47.0042C46.9063 47.0271 46.2128 47.5768 46.2128 48.5896C46.2128 48.8713 46.2128 49.6306 46.2128 49.995H4.94528V6.02385H46.2128C46.2128 6.02385 46.2128 7.01531 46.2128 7.37913C46.2128 8.19932 46.8915 8.78079 46.9212 8.80568L50.6154 11.8531C50.6209 11.8574 50.751 11.9578 50.9009 11.9578C51.0962 11.9578 51.3286 11.8034 51.3286 11.0685V4.62842C51.3286 2.03312 49.6018 0 47.3976 0H4.10151C1.83999 0.000200782 0 2.07648 0 4.62842V50.9881C0 53.6055 1.87784 55.8167 4.10083 55.8173C4.101 55.8173 4.10117 55.8173 4.10151 55.8173H47.3976C47.3979 55.8173 47.3981 55.8173 47.3985 55.8173C49.5657 55.8169 51.3286 53.6507 51.3286 50.9883V45.1761C51.3286 44.1802 51.0452 43.9712 50.8073 43.9712ZM51.153 11.2305C51.1557 11.1795 51.1581 11.1273 51.1581 11.0681C51.1581 11.1213 51.156 11.1761 51.153 11.2305ZM51.1444 11.3343C51.1458 11.3211 51.1475 11.3092 51.1487 11.2954C51.1475 11.3086 51.1458 11.3213 51.1444 11.3343ZM51.1562 45.047C51.1574 45.0903 51.1581 45.1337 51.1581 45.1761C51.1581 45.1309 51.1572 45.0887 51.1562 45.047ZM51.1538 44.9795C51.1541 44.9873 51.1547 44.9954 51.155 45.0034C51.1547 44.995 51.1541 44.9875 51.1538 44.9795Z" fill="black" />
                                </StyledSvg>
                            </StyledButtonExit>
                        </>
                    )
                }
            </Flex>
        </StyledHeader>
    )
}