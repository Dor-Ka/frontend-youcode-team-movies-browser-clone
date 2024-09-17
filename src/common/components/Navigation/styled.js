import styled from "styled-components";
import { ReactComponent as LogoIcon } from "./Icons/Video.svg";
import { NavLink } from "react-router-dom";

export const StyledPageHeader = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.woodsmoke}; 
    color:  ${({ theme }) => theme.colors.white};
    padding-left: 17px;
    padding-right: 16px;
    min-height: 94px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        flex-direction: column;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        padding-left: 10px;
        padding-right: 10px;
    };
`;

export const NavigationContainer = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 17px;  
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        gap: 60px;
        margin-bottom: -24px;
        margin-left: -12px;
        margin-right: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        gap: 19px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        gap: 10px;
    };
`;

export const NavigationLogo = styled(NavLink)`
    display: flex;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;

    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        justify-content: space-around;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        gap: 8px;
    };
`;

export const NavigationLogoIcon = styled(LogoIcon)`
    max-width: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        max-width: 17px;
    }
`;

export const NavigationTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 13px;
    };

    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    };
`;

export const NavigationList = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding-left: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        flex: 1;
        gap: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        gap: 6px;
    };
`;

export const NavigationItem = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    margin: 24px 0px;
    padding: 13.5px 24px;
    position: relative;
    border: 1px solid transparent; 
    border-radius: 24px;
    transition: border 0.3s ease, margin 0.3s ease; 
    
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
        margin: 24px 0px;
        transform: scale(1.1);
    }
    
    &.active {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
        margin: 24px 0px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 12px;
        padding: 12px;
    };
`;