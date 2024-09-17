import styled from "styled-components";

export const StyledDetailsTile = styled.div`
    display: grid;
    grid-template-columns: 312px;
    grid-template-areas: 
        "image details"
        "image description"
        "image ...";
    grid-gap: 40px;
    align-content: start;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        grid-template-columns:repeat(2, 1fr);
        grid-template-areas: 
            "image details"
            "description description";
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        margin-bottom: 42px;
        grid-gap: 28px;
    }
  
    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-template-columns: 169px 1fr;
        grid-gap: 16px;
        padding: 16px;
    };

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileM}) {
        grid-template-columns: 114px;
        grid-gap: 16px;
        padding: 16px;
        margin-bottom: 21px;
    }; 
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: image;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.silver};
    width: 100%;
    height: 464px;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        height: 250px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        height: 169px;
    };
`;

export const Image = styled.img`
    grid-area: image;
    width: 100%;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
     width: 100%
    };
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 24px;
    grid-area: details;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        grid-gap: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 8px;
    };
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        font-size: 26px;
        font-weight: 500;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 16px;
        font-weight: 500;
    };
`;

export const Year = styled.p`
    font-size: 22px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        font-size: 17px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.waterloo};
    };
`;

export const DetailInfo = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: start;
    grid-gap: 8px;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        font-size: 15px;
        line-height: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 12px;
        line-height: 16px;
    };
`;

export const DetailInfoItem = styled.p`
    margin: 0;
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        display: none;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
    grid-area: description;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 14px;
        font-weight: 200;
        line-height: 22px;
    };
`;