import styled from "styled-components";

export const BannerContent = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.woodsmoke};
`;

export const Banner =
    styled.div.attrs(({ $backdrop }) => ({
        style: {
            backgroundImage: `url(${$backdrop})`
        }
    }))`
    width: 80%;

    margin: auto;
    padding-top: 27%;
    padding-bottom: 3%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 0px 5px 21px 23px ${({ theme }) => theme.colors.woodsmoke};;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    box-shadow: inset 0px 5px 24px 27px
        ${({ theme }) => theme.colors.woodsmoke};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        box-shadow: inset 0px 5px 14px 11px 
            ${({ theme }) => theme.colors.woodsmoke};
            padding-top: 20%;
            padding-bottom: 0;
            background-size: 100%;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        background-size: cover;
    };
`;

export const BannerMainInfo = styled.div`
    display: grid;
    grid-gap: 24px;

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 8px;
    };
`;

export const MovieTitle = styled.header`
    font-size: 64px;
    font-weight: 600;

    @media (max-width:  ${({ theme }) => theme.breakpoints.tabletS}) {
        font-size: 45px;
    };

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 24px;
        transform: translateY(19px);
    };
`;