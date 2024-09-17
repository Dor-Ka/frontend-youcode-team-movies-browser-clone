import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../Icons/Search.svg";


export const Search = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px;
    padding-right: 16px;
    
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        width: 100%;
        flex-basis: 100%;
        padding: 14px 16px;
        margin: 0;
        margin-bottom: 16px;
        width: 75%;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        margin-top: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        width: 100%;
    };
`;

export const StyledSearchIcon = styled(SearchIcon) `
    margin-left: 12px;
    max-width: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        max-width: 17px;
    };
`;


export const Input = styled.input`
    border: none;
    background-color: unset;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.waterloo};
    }

    &:focus-visible{
        outline: none;
    }
`;